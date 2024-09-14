import {sortByObject} from "../sortByObject";

describe('sortByObject with mutate option', () => {
	const sampleData = [
		{ name: 'John', age: 25 },
		{ name: 'Alice', age: 30 },
		{ name: 'Bob', age: 22 },
	];

	const nestedData = [
		{ user: { info: { name: 'John' } }, score: 10 },
		{ user: { info: { name: 'Alice' } }, score: 15 },
		{ user: { info: { name: 'Bob' } }, score: 5 },
	];

	it('should sort the array in place by default (mutate = true)', () => {
		const data = [...sampleData]; // Copie pour ne pas affecter l'original
		sortByObject(data, { keyPath: ['age'], order: 'asc' });
		expect(data[0].age).toBe(22);
		expect(data[1].age).toBe(25);
		expect(data[2].age).toBe(30);
	});

	it('should return a new sorted array when mutate is false', () => {
		const data = [...sampleData];
		const sortedData = sortByObject(data, { keyPath: ['age'], order: 'asc', mutate: false });

		// Vérification que la copie est triée
		expect(sortedData[0].age).toBe(22);
		expect(sortedData[1].age).toBe(25);
		expect(sortedData[2].age).toBe(30);

		// Vérification que l'original n'est pas modifié
		expect(data[0].age).toBe(25);
		expect(data[1].age).toBe(30);
		expect(data[2].age).toBe(22);
	});

	it('should sort by a nested key in ascending order (mutate = true)', () => {
		const data = [...nestedData];
		sortByObject(data, { keyPath: ['user', 'info', 'name'], order: 'asc' });
		expect(data[0].user.info.name).toBe('Alice');
		expect(data[1].user.info.name).toBe('Bob');
		expect(data[2].user.info.name).toBe('John');
	});

	it('should return a new array sorted by a nested key when mutate is false', () => {
		const data = [...nestedData];
		const sortedData = sortByObject(data, { keyPath: ['user', 'info', 'name'], order: 'asc', mutate: false });

		expect(sortedData[0].user.info.name).toBe('Alice');
		expect(sortedData[1].user.info.name).toBe('Bob');
		expect(sortedData[2].user.info.name).toBe('John');

		// Vérifie que l'original n'est pas affecté
		expect(data[0].user.info.name).toBe('John');
		expect(data[1].user.info.name).toBe('Alice');
		expect(data[2].user.info.name).toBe('Bob');
	});

	it('should not sort if mutate is false and no order is specified', () => {
		const data = [...sampleData];
		const result = sortByObject(data, { keyPath: ['name'], mutate: false });
		expect(result).not.toBe(data); // Vérifie que ce n'est pas le même tableau
		expect(data[0].name).toBe('John');
		expect(data[1].name).toBe('Alice');
		expect(data[2].name).toBe('Bob');
	});

	it('should handle arrays with mixed types', () => {
		const mixedData = [
			{ value: 1 },
			{ value: 'string' },
		];
		const result = sortByObject(mixedData, { keyPath: ['value'], mutate: false });
		expect(result).toEqual(mixedData); // Aucun tri ne devrait être effectué
	});

	it('should handle an empty array without error', () => {
		const result = sortByObject([], { keyPath: ['name'], mutate: false });
		expect(result).toEqual([]); // Devrait renvoyer un tableau vide
	});

	it('should not change the original array when keyPath is non-existent and mutate is false', () => {
		const data = [...sampleData];
		const result = sortByObject(data, { keyPath: ['nonExistingKey'], mutate: false });
		expect(result).toEqual(data); // Devrait renvoyer le même tableau (non modifié)
	});
});
