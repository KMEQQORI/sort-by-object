
# 📦 sort-by-object

**`sort-by-object`** is a utility function that allows sorting arrays of objects based on nested properties. It supports sorting both strings and numbers, and allows specifying the sort order (`asc` or `desc`). Additionally, you can control whether the original array is mutated or if a new sorted array is returned.

## 🚀 Installation

To install **`sort-by-object`** in your project, run the following command:

```bash
npm install sort-by-object
```

## 📖 Usage

Here’s how to use **`sort-by-object`** in your TypeScript/JavaScript project.

### Example Code

```ts
import { sortByObject } from 'sort-by-object';

const data = [
  { name: 'John', age: 25 },
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 22 },
];

// Sort by 'age' in ascending order and mutate the original array (default)
sortByObject(data, { keyPath: ['age'], order: 'asc' });

// Sort by 'name' without mutating the original array (creates a copy)
const sortedByName = sortByObject(data, { keyPath: ['name'], order: 'asc', mutate: false });
console.log(sortedByName);
```

### Nested Key Example

```ts
const nestedData = [
  { user: { info: { name: 'John' } }, score: 10 },
  { user: { info: { name: 'Alice' } }, score: 15 },
  { user: { info: { name: 'Bob' } }, score: 5 },
];

// Sort by nested 'user.info.name' in ascending order without mutating the original array
const sortedByNestedName = sortByObject(nestedData, { keyPath: ['user', 'info', 'name'], order: 'asc', mutate: false });
console.log(sortedByNestedName);
```

## 🛠️ Methods

### Function Signature

```ts
function sortByObject<T>(array: T[], options: SortOptions): T[];
```

- **`array` (T[]):** The array of objects to be sorted.
- **`options` (SortOptions):** An object containing the sorting options.
    - **`keyPath` (Array<string | number | symbol>):** The path to the nested key you want to sort by.
    - **`order` (SortOrder):** Defines whether to sort in ascending (`'asc'`) or descending (`'desc'`) order (optional, default is `'asc'`).
    - **`mutate` (boolean):** If `true`, the original array is sorted in place. If `false`, a new sorted array is returned (optional, default is `true`).

### Type Definitions

```ts
type SortOrder = 'asc' | 'desc';

interface SortOptions {
  keyPath: (string | number | symbol)[];
  order?: SortOrder;
  mutate?: boolean;
}
```

## 🔧 Options

- **`keyPath` (Array<string | number | symbol>):** The path to the nested key you want to sort by.
- **`order` (SortOrder):** Defines whether to sort in ascending (`'asc'`) or descending (`'desc'`) order (default is `'asc'`).
- **`mutate` (boolean):** If `true`, sorts the array in place. If `false`, returns a new sorted array (default is `true`).

## 📌 Notes

This utility is ideal for scenarios where you need to sort arrays of complex objects with deeply nested properties. It handles both string and numeric comparisons.

## 🤝 Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to submit a pull request or open an issue on the project’s GitHub repository.

## 📄 License

This project is licensed under the **MIT License**. See the LICENSE file for more details.

## 👤 Author

**Khalil MEQQORI** - Creator of the module  
For any questions or issues, please open an issue on the GitHub repository or contact at **meqqorikhalil@gmail.com**.
