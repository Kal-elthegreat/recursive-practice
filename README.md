# recursive-practice
wrote a couple of recursive functions


#function 1

I simply wanted to find a target number out of a specific range (100)

My thought process here was basically like the game "I'm thinking of a number 1-100" and the guesses where randomized, hence the `Math.random()` to get a number.
I also added some limits so the function won't run if the number is under 0 or greater than 100.

I wanted to keep track of the guesses so I stored each guess in an array (`guesses`)


After running this I noticed some numbers were being called multiple times which is kind of illogical. So I created the second function which removes the guessed number therby shortening the array and getting the answer in less tries.

***Improvements****
1. adding a parameter to allow for the number range to be variable in the first function
2. make the second function more efficient using either Merge sort or Quick sort
