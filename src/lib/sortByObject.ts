type SortOrder = 'asc' | 'desc';

function getNestedValue<T>(obj: T, path: (keyof T | string)[]): any {
	return path.reduce((acc: any, key) => {
		if (acc && typeof acc === 'object') {
			return acc[key];
		}
		return undefined;
	}, obj);
}
export function sortByObject<T>(array: T[], keyPath: (keyof T | string)[], order: SortOrder = 'asc'): T[] {
	return array.sort((a, b) => {
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