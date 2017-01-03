import React from 'react';
import Number from './number';
// import Buttons from './buttons';
import Display from './display';


export default class Main extends React.Component {
  render() {
    return(
      <div>
        <Number />
        <Display />
      </div>
    )
  }
}
