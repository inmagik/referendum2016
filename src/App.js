import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { createStore, compose } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import Home from './containers/Home';

const store = createStore(rootReducer, undefined, compose(
  //applyMiddleware(routerMiddleware(browserHistory)),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
));

import { Container, Jumbotron, Row, Col } from 'reactstrap';

class App extends Component {


  render() {
    return (
      <Provider store={store}>
      <div >
      <Jumbotron>
         <h1 className="display-3">Referendum 2016</h1>
      </Jumbotron>


        <Home/>
      </div>

      </Provider>
    );
  }
}


export default App;
