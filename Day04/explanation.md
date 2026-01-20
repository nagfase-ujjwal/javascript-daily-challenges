# Explanation - Given an Array, Return the count of Even Numbers and store it in an array

To find the total even numbers present in the given array we can follow the below steps:

- Create a variable `count` and itialize it to `0`
- Create a variable `newArray` and initialize it to an empty array
- Using the if statement check if the given input is a valid array, if not return false.
- Iterate over each element in the array using the `for of loop`. Each element in the array should be a valid number and should be of finite value, if not return false.
- If each element passed is divisible by 2, increase the counter by 1.
- Push the even numbers into `newArray`.
- At the end return count, it stores the

## Output:

- countEvens([1, 2, 3, 4, 5, 6]) -> { count: 3, evens: [2, 4, 6] }
- countEvens([10, 15, 20, 25]) -> { count: 2, evens: [10, 20] }
- countEvens([1, 3, 5, 7]) -> { count: 0, evens: [] }
- countEvens("not an array") -> false
- countEvens([2, 4, "six"]) -> false
