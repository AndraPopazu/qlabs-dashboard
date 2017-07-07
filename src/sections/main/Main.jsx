import React, { Component } from 'react';
import './main.scss';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Header from './../../common/components/header/Header';
import { navigation } from './../../common/config/navigation';
import Home from './../home/Home';

class Main extends Component {
  render() {
    return (
      <Router>
        <div className="Main">
          <div className="mainContent">
            <Header navigation={navigation.headerMenu} />
            <Switch>
              <Route path="/home" component={Home} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default Main;
