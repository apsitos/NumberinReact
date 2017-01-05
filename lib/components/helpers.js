import React from 'react';

const compareGuess = (guess, randomNum) => {

  if (guess > randomNum) {
    return "Nice try! You're too high!"
  }
  if (guess < randomNum) {
    return "Uh oh! You're too low!"
  }
  if (guess === randomNum){
    return "Right on the money!"
  }
  if (guess === null) {
    return "Error! That is not a number!"
  }
};

export default compareGuess;
