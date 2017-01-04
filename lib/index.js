require('../CSS/reset.css');
require('../CSS/styles.scss')
import React from 'react';
import ReactDOM from 'react-dom';
import Guess from './components/guess';

export default class Main extends React.Component {
  render() {
    return(
      <div>
        <Guess />
      </div>
    )
  }
}

ReactDOM.render(<Guess />, document.getElementById('application'))
