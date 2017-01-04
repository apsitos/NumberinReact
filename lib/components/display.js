import React from 'react';

export default class Display extends React.Component {
  constructor() {
    super();
    this.state= {
      message: '',
    }
  }

  displayMessage({ attempt }) {
    if (this.props.attempt == ''){
      this.setState({ message: 'Try Your Luck!'})
      )
    }
  }

  render() {
    return(
      <section id="message" text={this.state.message}></section>
    )
  }

}
