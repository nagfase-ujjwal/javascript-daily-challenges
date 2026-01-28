# Explanation - Sum of All Arguments Passed to Function

To find the sum of all arguments passed to a function, we can utilize the `arguments` object available within function is JavaScript.
Integers passed to using the arguments object can be accessed like an array.

**args is a real array, but typeof args shows "object" because arrays are objects under the hood in JavaScript.**

- Create a variable total and initialize it to 0.
- Add a conditional statement to check if there are no arguments passed. If true, return 0.
- Loop through each argument using a for loop.
- For each argument, add its value to the total variable.
- After the loop, return the total variable.

## Output

sum(1, 2, 3, 4) // returns 10
sum(-1, -2, -3, -4) // returns -10
sum() // returns 0
sum(5, -3, 8, -2) // returns 8
