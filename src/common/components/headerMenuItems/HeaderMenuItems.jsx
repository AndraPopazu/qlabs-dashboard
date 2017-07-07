import React from 'react';
import { NavLink } from 'react-router-dom';
import './headerMenuItems.scss';

const headerMenuItems = ({ item }) => {
  return (
    <li className="headerLink">
      <NavLink to={item.linkTo}>
        {item.name}
      </NavLink>
    </li>
  );
};

export default headerMenuItems;
