import React, { Component } from 'react';
import './LandingPage.css';

class LandingPage extends Component {
  render(){
    return(
    <div className='input-btn'>
      <h1> SIBERIA HILLS </h1>
    <input
      type="text"
      name="e-mail"
      placeholder="Sample@Website.com"
    />
    <button className='btn'>Submit</button>

    <h3>BACK IN AUGUST</h3>
    <h3>SIGN UP FOR FIRST UPDATES </h3>
    <h3>LOVE YOU ALL </h3>
  </div>
)
  }
}


export default LandingPage;
