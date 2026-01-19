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
