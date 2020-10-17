console.log("running");
//recursive function

// take in a number between 1-100
// generate a random number between 1-100

// if number less than 1 exit w/ alert
// if number greater than 100 exit w/ alert

// see if it matches the random number
// if yes, exit
// if no, grab another random number

let guesses = [];

const recursion = (targetNum) => {
  let randomNum = Math.floor(Math.random() * 100) + 1;

  if (targetNum > 100 || targetNum <= 0) {
    alert("Please select a number between 1-100");
    return;
  }

  if (targetNum === randomNum) {
    guesses.push(randomNum);
    return guesses;
  }

  guesses.push(randomNum);
  recursion(targetNum);
};

recursion(40);
console.log(guesses, guesses.length);

//grab a random number from an array,
// check that number against the targetedNum
// if match, add to arr and return
// else remove number from array and repeat process
const practiceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const guessed = [];

const recursion2 = (arr, targetedNum) => {
  // grab random number from array length
  let select = Math.floor(Math.random() * arr.length);

  //check if match
  if (targetedNum === arr[select]) {
    guessed.push(arr[select]);
    return;
  }

  //if not alter array so you don't guess the same values
  // when you delete from the array you are left with an undefined value which needs to be filtered out
  guessed.push(arr[select]);
  delete arr[select];
  let newArr = arr.filter((elem) => elem !== undefined);

  //try again
  recursion2(newArr, targetedNum);
};

recursion2(practiceArray, 3);
console.log(guessed, guessed.length);
