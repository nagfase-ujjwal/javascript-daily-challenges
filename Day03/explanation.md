# Explanation - Find smallest number in an array

To find the smallest number in an array, we can follow these steps:

- Checked if the input is a valid array. If not, return false. `Array.isArray()` is a JS built-in method that checks if a value is an array.
- Checked if the array is empty. If it is, return `null`. You can check the length of the array using the `.length` property.
- Used a for of loop to iterate through each element present in the array.
- During each iteration, if the current element is not a number or a finite number (i.e., NaN, Infinity, or -Infinity), return false.
- `Math.min()` is a built-in JavaScript function that returns the smallest number from the arguments passed to it. We can use the spread operator (`...`) to pass all elements of the array as individual arguments to `Math.min()`.

## Output

findSmallestNumber([3, 1, 7, 2]) // Normal case -> 1
findSmallestNumber([-1, -2, -3]) // All negative -> -3
findSmallestNumber("not an array") // Invalid input (not an array) -> false
findSmallestNumber([]) // Empty array -> null
