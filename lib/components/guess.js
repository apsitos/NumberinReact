import React from 'react';
import Display from './display'

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

  setMin(e) {
    this.setState({ min: e.target.value })
  }

  setMax(e) {
    this.setState({ max: e.target.value })
  }

  updateRange(e) {
    let newMin = parseInt(this.state.min);
    let newMax = parseInt(this.state.max);
    this.setState({ min: newMin });
    this.setState({ max: newMax });
    this.generate();
  }

  generate() {
    let randomNum = Math.floor(Math.random() * (this.state.max - this.state.min + 1)) + this.state.min;
    this.setState({randomNum});
  }

  submit() {
    const userGuess = parseInt(this.state.attempt)
    this.setState({ guess: userGuess })
    this.clearField();
  }

  clearField() {
    this.setState({ attempt: '' });
  }

  reset() {
    this.clearField();
    this.setState({ guess: '' });
    this.setState({ min: 1 });
    this.setState({ max: 100 });
    this.generate();
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
        <section className="range">
          <label>
            Min:
            <input id="min" type="number" onChange={(e) => this.setMin(e)} />
          </label>
          <label>
            Max:
            <input id="max" type="number" onChange={(e) => this.setMax(e)} />
          </label>
          <button id="range" type="submit" onClick={(e) => this.updateRange(e)}>Submit</button>
        </section>
        <button onClick={() => {this.submit()}}>Guess</button>
        <button disabled={!this.state.attempt} onClick={() => {this.clearField()}}>Clear</button>
        <button disabled={!this.state.attempt && !this.state.guess} onClick={() => {this.reset()}}>Reset</button>
        <Display guess={this.state.guess} randomNum={this.state.randomNum}/>
      </div>
    );
  }
}
