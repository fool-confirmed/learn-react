import React from 'react';

function Menu(props) {
  return (
    
    <div id={props.id} className={props.className}>
    
      <h5>Menu</h5>
      <nav>
        <ul style={{textAlign:"left"}} >
          <li><a href="/">Home</a></li>
          <li><a href="/contact-us">Contact us</a></li>
        </ul>
      </nav>
      
    </div>
    );
}

export default Menu;
