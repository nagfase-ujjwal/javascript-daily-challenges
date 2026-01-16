function generateAtoZ() {
  const emptyArray = [];
  for (let i = 65; i <= 90; i++) {
    emptyArray.push(String.fromCharCode(i));
  }
  return emptyArray;
}

console.log(generateAtoZ());
