import React from 'react';
import Guess from './guess';
import Display from './display';

export default class Main extends React.Component {
  render() {
    return(
      <div>
        <Guess />
        <Display />
      </div>
    )
  }
}
