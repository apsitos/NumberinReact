import React from 'react';
import Display from './display'

const Guess = ({compare}) => {

  return(
    <div>
      <button onClick={ () => compare() } >Guess</button>
    </div>
  )
}

export default Guess;
