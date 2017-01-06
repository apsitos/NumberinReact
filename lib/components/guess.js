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

  setNumber(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  updateRange(e) {
    let newMin = parseInt(this.state.min);
    let newMax = parseInt(this.state.max);
    this.setState({ min: newMin, max: newMax }, () => this.generate());
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
                  name="attempt"
                  onChange={(e) => this.setNumber(e)}/>
        </section>
        <section className="range">
          <label>
            Min:
            <input
              id="min"
              type="number"
              name="min"
              onChange={(e) => this.setNumber(e)} />
          </label>
          <label>
            Max:
            <input
              id="max"
              type="number"
              name="max"
              onChange={(e) => this.setNumber(e)} />
          </label>
          <button
            id="range"
            type="submit"
            name="range"
            onClick={(e) => this.setNumber(e)}>Submit</button>
        </section>
        <button onClick={() => {this.submit()}}>Guess</button>
        <button disabled={!this.state.attempt} onClick={() => {this.clearField()}}>Clear</button>
        <button disabled={!this.state.attempt && !this.state.guess} onClick={() => {this.reset()}}>Reset</button>
        <Display guess={this.state.guess} randomNum={this.state.randomNum}/>
      </div>
    );
  }
}
