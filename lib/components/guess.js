import React from 'react';

export default class Guess extends React.Component{
  constructor() {
    super();
    this.state ={
      attempt: '',
      randomNum: '',
      min: 1,
      max: 100,
      message: '',
    }
  }

  componentDidMount() {
    this.generate();
    this.displayMessage();
  }

  numberGuessed(e) {
    this.setState({ attempt: e.target.value });
  }

  generate(){
    let randomNum = Math.floor(Math.random() * (this.state.max - this.state.min + 1)) + this.state.min;
    console.log(randomNum);
    this.setState({randomNum});
  }

  erase() {
    this.setState({ attempt: '' })
  }

  reset() {
    // this.erase();
    // this.generate();
    // this.displayMessage();
    console.log("Start again");
  }

  render() {
    return(
      <div>
        <section className="inputfield">
          <input id="inputbox" type="number" placeholder="Enter Your Guess"
            value={this.state.attempt} onChange={(e) => this.numberGuessed(e)}/>
        </section>
        <button onClick={() => {this.compare()}}>Guess</button>
        <button onClick={() => {this.erase()}}>Clear</button>
        <button onClick={() => {this.reset()}}>Reset</button>
      </div>
    );
  }
}
