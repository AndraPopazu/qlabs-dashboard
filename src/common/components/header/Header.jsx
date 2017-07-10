import React from 'react';
import './header.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import HeaderMenuItems from './../headerMenuItems/HeaderMenuItems';
import LogoContainer from './../logoContainer/LogoContainer';

const Header = ({ navigationLeft, navigationRight }) => {
  return (
    <div className="header">
      <div className="headerWrapper">
        <div className="leftNav">
          <LogoContainer />
          <ul className="headerMenuLeft">
            {navigationLeft.map((menuItem, index) =>
              <HeaderMenuItems item={menuItem} key={index} />
            )}
          </ul>
        </div>
        <div className="rightNav">
          <ul className="headerMenuLeft">
            {navigationRight.map((menuItem, index) =>
              <HeaderMenuItems item={menuItem} key={index} />
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
