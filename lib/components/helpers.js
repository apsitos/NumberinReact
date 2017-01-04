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
};

export default compareGuess;
