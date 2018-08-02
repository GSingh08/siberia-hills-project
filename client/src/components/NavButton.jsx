import React from 'react';

const NavButton = (props) => {
  return (
    <div 
      style={{
        color: props.currentlyViewed ? 'red' : 'black'
      }}
      onClick={props.navClick}
    >{props.name.toUpperCase()}</div>
  );
};

export default NavButton;