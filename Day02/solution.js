function sum(...args) {
  var total = 0;
  if (args.length === 0) {
    return 0;
  }
  for (var i = 0; i < args.length; i++) {
    total += args[i];
  }
  console.log("Type of args:", typeof args); // Object
  console.log("Is args array:", Array.isArray(args)); // true
  return total;
}

console.log(sum(1, 2, 3, 4)); // Output: 10
console.log(sum(-1, -2, -3, -4)); // Output: -10
console.log(sum()); // Output: 0
console.log(sum(5, -3, 8, -2)); // Output: 8
