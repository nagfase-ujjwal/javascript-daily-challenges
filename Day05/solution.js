function isEligibleToVote(age) {
  if (typeof age !== "number" || !Number.isFinite(age) || age < 0) {
    return false;
  }

  return age >= 18 ? "Eligible to vote" : "Not Eligible to vote";
}

console.log(isEligibleToVote(20)); // "Eligible to vote"
console.log(isEligibleToVote(18)); // "Eligible to vote"
console.log(isEligibleToVote(17)); // "Not Eligible to vote"
console.log(isEligibleToVote(-5)); // false
console.log(isEligibleToVote("20")); // false
console.log(isEligibleToVote(NaN)); // false
console.log(isEligibleToVote(Infinity)); // false
console.log(isEligibleToVote(null)); // false
console.log(isEligibleToVote(undefined)); // false
