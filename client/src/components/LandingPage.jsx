import React, { Component } from 'react';
import './LandingPage.css';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }


  componentDidMount() {
    console.log('component mounted');
    document.addEventListener('mousedown', this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    console.log('component unmounted');
    document.removeEventListener('mousedown', this.handleOutsideClick, false);
  }


  handleOutsideClick (e) {
    if (!this.node.contains(e.target)) {
      console.log('clicked outisde');
      this.props.checkClick();
    }
  }

  render() {
    return (
      <div className='input-btn' ref={node => this.node = node}>
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
    );
  }
}

export default LandingPage;