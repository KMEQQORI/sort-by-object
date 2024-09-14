type SortOrder = 'asc' | 'desc';

function getNestedValue<T>(obj: T, path: (keyof T | string | number | symbol)[]): any {
	return path.reduce((acc: any, key) => {
		if (acc && typeof acc === 'object') {
			return acc[key];
		}
		return undefined;
	}, obj);
}

interface SortOptions {
	keyPath: (string | number | symbol)[];
	order?: SortOrder;
	mutate?: boolean;
}

export function sortByObject<T>(array: T[], options: SortOptions): T[] {
	const { keyPath, order = 'asc', mutate = true } = options;

	// Crée une copie du tableau si mutate est faux, sinon trie directement le tableau original
	const targetArray = mutate ? array : [...array];

	return targetArray.sort((a, b) => {
		const valA = getNestedValue(a, keyPath);
		const valB = getNestedValue(b, keyPath);

		if (typeof valA === 'string' && typeof valB === 'string') {
			return order === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
		}

		if (typeof valA === 'number' && typeof valB === 'number') {
			return order === 'asc' ? valA - valB : valB - valA;
		}

		return 0;
	});
}
