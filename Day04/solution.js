function countEvens(arr) {
  let count = 0;
  let newArray = [];
  if (!Array.isArray(arr)) {
    return false;
  }

  for (let i of arr) {
    if (typeof i !== "number" || !Number.isFinite(i)) {
      return false;
    } else if (i % 2 === 0) {
      count += 1;
      newArray.push(i);
    }
  }
  console.log(newArray);
  return { count, evens: newArray };
}

console.log(countEvens([1, 2, 3, 4, 5, 6])); // Normal case -> { count: 3, evens: [2, 4, 6] }
console.log(countEvens([10, 15, 20, 25])); // Mixed numbers -> { count: 2, evens: [10, 20] }
console.log(countEvens([1, 3, 5, 7])); // No even numbers -> { count: 0, evens: [] }
console.log(countEvens([2, 4, 6, 8])); // All even numbers -> { count: 4, evens: [2, 4, 6, 8] }
console.log(countEvens([])); // Empty array -> { count: 0, evens: [] }
console.log(countEvens("not an array")); // Invalid input (not an array) -> false
console.log(countEvens([2, 4, "six"])); // Invalid input (non-number element) -> false
