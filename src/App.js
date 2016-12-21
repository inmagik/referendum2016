import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import {BarsPage} from './components/BarsPage';
import {TreeMapPage} from './components/TreeMapPage';
import {DataContainer} from './containers/DataContainer';

const store = createStore(rootReducer, undefined, compose(
  applyMiddleware(routerMiddleware(browserHistory)),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
));


const history = syncHistoryWithStore(browserHistory, store);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <DataContainer>
      <Router history={history}>
        <Route path={'/'} component={TreeMapPage} />
        <Route path={'/bars'} component={BarsPage} />
      </Router>
      </DataContainer>
      </Provider>
    );
  }
}


export default App;
