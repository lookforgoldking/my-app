import React, { Component } from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import store from '../store/store';
import {View as CommonWrapper} from '../components/CommonWrapper/';
import {View as Home} from '../pages/Home/';
import {View as Detail} from '../pages/Detail/';
import 'whatwg-fetch';
import './reset.css';
import './style.css';
import 'antd/dist/antd.css';

const history = syncHistoryWithStore(browserHistory, store);

class App extends Component {
  render() {
    return (
      <div className="main">
        <Provider store={store}>
          <Router history={history}>
            <Route path='/' component={CommonWrapper}>
              <IndexRoute component={Home} />
              <Route path='detail/:id' component={Detail} />
            </Route>
          </Router>
        </Provider>
      </div>
    )
  }
}

export default App;
