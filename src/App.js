import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import store from './store';
import Header from './common/header/Header';
import HomeContainer from './features/home/HomeContainer';
import SecondPage from './features/second/SecondPage';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <div className="container">
          <Router>
            <Switch>
              <Route path="/page1" component={HomeContainer} />
              <Route path="/page2" component={SecondPage} />
              <Redirect to="/page1" />
            </Switch>
          </Router>
        </div>
      </div>
    </Provider>

  );
}

export default App;
