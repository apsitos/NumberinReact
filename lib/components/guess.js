import React from 'react';
import Display from './display'
// import compare from './helpers'

export default class Guess extends React.Component{
  constructor() {
    super();
    this.state = {
      attempt: '',
      guess: '',
      randomNum: '',
      min: 1,
      max: 100,
    }
  }

  componentDidMount() {
    this.generate();
  }

  numberGuessed(e) {
    this.setState({ attempt: e.target.value });
  }

  generate() {
    let randomNum = Math.floor(Math.random() * (this.state.max - this.state.min + 1)) + this.state.min;
    this.setState({randomNum});
  }

  submit() {
    this.setState({ guess: this.state.attempt })
    this.clearField();
  }

  clearField() {
    this.setState({ attempt: '' });
  }

  reset() {
    this.erase();
    this.generate();
    // this.displayMessage();
  }

  render() {
    return(
      <div>
        <section className="inputfield">
          <input  id="inputbox"
                  type="number"
                  placeholder="Enter Your Guess"
                  value={this.state.attempt}
                  onChange={(e) => this.numberGuessed(e)}/>
        </section>
        <button onClick={() => {this.submit()}}>Guess</button>
        <button onClick={() => {this.clearField()}}>Clear</button>
        <button onClick={() => {this.reset()}}>Reset</button>
        <Display guess={this.state.guess} randomNum={this.state.randomNum}/>
      </div>
    );
  }
}
