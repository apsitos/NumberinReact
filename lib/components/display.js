import React from 'react';

export default class Display extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     message: 'No Guesses Yet!'
  //   }
  // }
  render() {
    return (
      <div>
        <section id='confirm'>
          {this.props.confirm}
        </section>
        <section id='number'>
          {this.props.guess}
        </section>
        <section id='message'>
          {this.props.message}
        </section>
      </div>
    );
  }
}
