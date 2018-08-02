import React, { Component } from 'react';

const Header = () => (
  <div style={{ display: 'flex', flex: '1 100%', justifyContent: 'center' }}>
    <img src={require('../assets/Logo.png')} />
  </div>
);

export default Header;