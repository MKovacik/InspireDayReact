import React, { Component } from 'react';
import './Home.css';
import logo from '../../logo.svg';

class Home extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  //componentWillMount(){}
  //componentDidMount(){}
  //componentWillUnmount(){}

  //componentWillReceiveProps(){}
  //shouldComponentUpdate(){}
  //componentWillUpdate(){}
  //componentDidUpdate(){}

  render() {
    return (
      <div className="Content">
      <header className="Content-header">
        <img src={logo} className="Content-logo" alt="logo" />
        <a
          className="Content-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Inspire yourself and learn React
        </a>
      </header>
    </div>
    );
  }
}

export default Home;