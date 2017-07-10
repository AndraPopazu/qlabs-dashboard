import React, { Component } from 'react';
import './home.scss';

import HeroBanner from './../../common/components/heroBanner/HeroBanner.jsx';
class Home extends Component {
  render() {
    return (
      <div className="Home">
        <HeroBanner />
      </div>
    );
  }
}

export default Home;
