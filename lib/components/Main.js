import React from 'react';
import Number from './number'

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
