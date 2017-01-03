import React from 'react';
import Number from './number';
import Guess from './guessbutton';
import Clear from './clearbutton';
import Reset from './resetbutton';
import Display from './display';


export default class Main extends React.Component {
  render() {
    return(
      <div>
        <Number />
        <Guess />
        <Clear />
        <Reset />
        <Display />
      </div>
    )
  }
}
