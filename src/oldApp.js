import React from 'react';
import Header from './header';
import Footer from './footer';
import { connect } from 'react-redux';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleButtonClick = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter + 1});
  };

  handleButtonClick2 = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter - 1});
  };

  render() {
    return (
      <div>
        <h4>{this.state.counter}</h4>
        <button onClick={this.handleButtonClick}>+ Click Me</button>
        <button onClick={this.handleButtonClick2}>- Click Me</button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
