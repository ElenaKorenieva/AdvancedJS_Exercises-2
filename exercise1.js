// Exercise 1
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it and returns an array of them.

// The function should not modify the array. It should return the new array. For instance:

// JAVASCRIPT
// let arr = [5, 3, 8, 1]

// let filtered = filterRange(arr, 1, 4)

// alert( filtered )  // 3,1 (matching values)

// alert( arr )      // 5,3,8,1 (not modified)

let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  return arr.filter((el) => el >= a && el < b);
}

console.log(filterRange(arr, 1, 4));
console.log(arr);
