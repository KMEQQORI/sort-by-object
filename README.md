
# 📦 sort-by-object

**`sort-by-object`** is a utility function that allows sorting arrays of objects based on nested properties. It supports sorting both strings and numbers, and allows specifying the sort order (`asc` or `desc`).

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

// Sort by 'name' in ascending order
const sortedByName = sortByObject(data, ['name'], 'asc');

// Sort by 'age' in descending order
const sortedByAge = sortByObject(data, ['age'], 'desc');

console.log(sortedByName);
console.log(sortedByAge);
```

### Nested Key Example

```ts
const nestedData = [
  { user: { info: { name: 'John' } }, score: 10 },
  { user: { info: { name: 'Alice' } }, score: 15 },
];

// Sort by nested 'user.info.name' in ascending order
const sortedByNestedName = sortByObject(nestedData, ['user', 'info', 'name'], 'asc');
console.log(sortedByNestedName);
```

## 🛠️ Methods

### Function Signature

```ts
function sortByObject<T>(array: T[], keyPath: (keyof T | string)[], order: SortOrder = 'asc'): T[];
```

- **`array` (T[]):** The array of objects to be sorted.
- **`keyPath` (Array<string | keyof T>):** An array of strings or keys representing the path to the property.
- **`order` (SortOrder):** The sort order. Accepts `'asc'` for ascending or `'desc'` for descending. Default is `'asc'`.

### Type Definitions

```ts
type SortOrder = 'asc' | 'desc';
```

## 🔧 Options

- **`keyPath` (Array<string | keyof T>):** The path to the nested key you want to sort by.
- **`order` (SortOrder):** Defines whether to sort in ascending (`'asc'`) or descending (`'desc'`) order.

## 📌 Notes

This utility is ideal for scenarios where you need to sort arrays of complex objects with deeply nested properties. It handles both string and numeric comparisons.

## 🤝 Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to submit a pull request or open an issue on the project’s GitHub repository.

## 📄 License

This project is licensed under the **MIT License**. See the LICENSE file for more details.

## 👤 Author

**Khalil MEQQORI** - Creator of the module  
For any questions or issues, please open an issue on the GitHub repository or contact at **meqqorikhalil@gmail.com**.
