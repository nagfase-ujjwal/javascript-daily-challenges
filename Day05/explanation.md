# Explanation - Given an integer age, determine if the person is eligible to vote

To determine if a person is eligible to vote based on their age, we can follow these steps:

- Create a function which checks whether the given input is valid or not or is eligible or not based on the input provided.
- We will create conditional statement using `if` keyword to check the following conditions:
  - given input is of type `number` using the typeof method
  - given input is a finite `number`
  - given input is not a negative value
- Once the conditions are satisfied then we will check the given input is greater than equal to 18:
  - if true return `Eligible to vote`
  - else return `Not eligible to vote`
