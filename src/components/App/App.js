import React, { Component } from 'react';
import './App.css';

import { Route } from 'react-router';
import Layout from '../Layout/Layout';
import Home from '../Home/Home';
import Speakers from '../Speakers/Speakers';
import Speaker from '../Speaker/Speaker';

class App extends Component {
  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/speakers' component={Speakers} />
        <Route path='/speaker/:id' component={Speaker} />
      </Layout>
    );
  }
}

export default App;