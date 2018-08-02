import React from 'react';

const NavButton = (props) => {
  return (
    <div 
      style={styles}
      onClick={props.navClick}
    >{props.name.toUpperCase()}</div>
  );
};

const styles = {
  color: 'black'
};

export default NavButton;