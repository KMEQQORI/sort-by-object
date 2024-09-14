import {sortByObject} from "../sortByObject";

describe('sortByObject', () => {
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

	it('should sort by a top-level key in ascending order', () => {
		const sortedByName = sortByObject(sampleData, ['name'], 'asc');
		expect(sortedByName[0].name).toBe('Alice');
		expect(sortedByName[1].name).toBe('Bob');
		expect(sortedByName[2].name).toBe('John');
	});

	it('should sort by a top-level key in descending order', () => {
		const sortedByAge = sortByObject(sampleData, ['age'], 'desc');
		expect(sortedByAge[0].age).toBe(30);
		expect(sortedByAge[1].age).toBe(25);
		expect(sortedByAge[2].age).toBe(22);
	});

	it('should sort by a nested key in ascending order', () => {
		const sortedByNestedName = sortByObject(nestedData, ['user', 'info', 'name'], 'asc');
		expect(sortedByNestedName[0].user.info.name).toBe('Alice');
		expect(sortedByNestedName[1].user.info.name).toBe('Bob');
		expect(sortedByNestedName[2].user.info.name).toBe('John');
	});

	it('should sort by a nested key in descending order', () => {
		const sortedByNestedNameDesc = sortByObject(nestedData, ['user', 'info', 'name'], 'desc');
		expect(sortedByNestedNameDesc[0].user.info.name).toBe('John');
		expect(sortedByNestedNameDesc[1].user.info.name).toBe('Bob');
		expect(sortedByNestedNameDesc[2].user.info.name).toBe('Alice');
	});

	it('should return 0 when the values are not comparable', () => {
		const mixedData = [
			{ value: 1 },
			{ value: 'string' },
		];
		const result = sortByObject(mixedData, ['value']);
		expect(result).toEqual(mixedData); // Aucun tri ne devrait être fait
	});

	it('should handle empty arrays correctly', () => {
		const result = sortByObject([], ['name']);
		expect(result).toEqual([]);
	});

	it('should handle non-existing key paths', () => {
		const result = sortByObject(sampleData, ['nonExistingKey']);
		expect(result).toEqual(sampleData); // Aucun changement attendu
	});
});
