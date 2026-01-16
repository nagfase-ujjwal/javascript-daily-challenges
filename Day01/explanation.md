# Explanation - Generate A to Z Alphabets

Each letter has its own ASCII code associated with it. In our case it ranges from **65 ("A") to 90 ("Z")**.
https://www.ascii-code.com/

- Create an empty array.
- We loop from 65 -> 90.
- For each ASCII code or number, we convert it into a character using `String.fromCharCode()`. This is a JS method.
- Push each character into an empty array.
- Return the array.

## Output

[
'A', 'B', 'C', 'D', 'E', 'F',
'G', 'H', 'I', 'J', 'K', 'L',
'M', 'N', 'O', 'P', 'Q', 'R',
'S', 'T', 'U', 'V', 'W', 'X',
'Y', 'Z'
]
