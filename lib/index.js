require('../CSS/reset.css');
require('../CSS/styles.scss')
import React from 'react';
import ReactDOM from 'react-dom';
import Guess from './components/guess'

ReactDOM.render(<Guess />, document.getElementById('application'))
