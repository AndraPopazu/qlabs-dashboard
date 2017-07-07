import React from 'react';
import './header.scss';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import HeaderMenuItems from './../headerMenuItems/HeaderMenuItems';

const Header = ({ navigation }) => {
  return (
    <div className="Header">
      <ul className="HeaderMenu">
        {navigation.map((menuItem, index) =>
          <HeaderMenuItems item={menuItem} key={index} />
        )}
      </ul>
    </div>
  );
};

export default Header;
