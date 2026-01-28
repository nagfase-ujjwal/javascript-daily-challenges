function findSmallestNumber(arr) {
  if (!Array.isArray(arr)) {
    return false;
  } else if (arr.length === 0) {
    return null;
  }

  for (let i of arr) {
    if (typeof i !== "number" || !Number.isFinite(i)) {
      return false;
    }
  }
  return Math.min(...arr);
}

console.log(findSmallestNumber([3, 1, 7, 2])); // Normal case -> 1
console.log(findSmallestNumber([10, -5, 20])); // Includes negative numbers -> -5
console.log(findSmallestNumber([5])); // Single element -> 5
console.log(findSmallestNumber([100, 200, 300])); // All positive -> 100
console.log(findSmallestNumber([-1, -2, -3])); // All negative -> -3
console.log(findSmallestNumber([])); // Empty array -> null
console.log(findSmallestNumber("not an array")); // Invalid input (not an array) -> false
console.log(findSmallestNumber([1, 2, "three"])); // Invalid input (non-number element) -> false
