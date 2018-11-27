import React from 'react';
import Clock from './clock';

function Header(props) {
  return (
    <div id={props.id} className={props.className} >
      Header Section
      <Clock />
    </div>
  );
}

export default Header;

