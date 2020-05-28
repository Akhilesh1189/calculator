import React, { Component } from 'react';
import './App.css';
import Result from './component/result';
import Keys from './component/keys';

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: ""
    }
  }

  onClick = button => {

    if (button === "=") {
      this.calculate()
    }

    else {
      this.setState({
        result: this.state.result + button
      })
    }
  };


  calculate = () => {
    var checkResult = ''
    if (this.state.result.includes('--')) {
      checkResult = this.state.result.replace('--', '+')
    }
    else {
      checkResult = this.state.result
    }


    this.setState({
      result: (eval(checkResult) || "") + ""
    })

  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };

  render() {
    return (
      <div>
        <div>
          <h1>Calculator</h1>
          <Result result={this.state.result} />
          <Keys onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default App;
