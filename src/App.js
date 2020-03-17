import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Header from './common/header/Header';
import HomeContainer from './features/home/HomeContainer';
import SecondPage from './features/second/SecondPage';

import store from './store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">

        <Router>
          <Header />
          <div className="container">
            <Switch>
              <Route path="/page1" component={HomeContainer} />
              <Route path="/page2" component={SecondPage} />
              <Redirect to="/page1" />
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>

  );
}

export default App;
