// Creating a WeakMap
const weakMap = new WeakMap();

// Creating objects to be used as keys
let obj1 = { name: 'John' };
let obj2 = { name: 'Jane' };

// Setting values
weakMap.set(obj1, 'Employee');
weakMap.set(obj2, 'Manager');

// Getting values
console.log(weakMap.get(obj1)); // Output: Employee
console.log(weakMap.get(obj2)); // Output: Manager

// Checking if a key exists
console.log(weakMap.has(obj1)); // Output: true

// Deleting a key
weakMap.delete(obj2);
console.log(weakMap.has(obj2)); // Output: false

// Garbage collection: If obj1 is set to null, it can be garbage collected
obj1 = null;
// weakMap no longer holds a strong reference to obj1
