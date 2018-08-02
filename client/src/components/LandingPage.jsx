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
      <div 
        className='input-btn'
        ref={node => this.node = node}
        style={{
          textAlign: 'center',
          maxHeight: '400px',
          width: '500px',
          borderWidth: '1px',
          borderStyle: 'solid'
        }}
      >
        <img src={require('../assets/Logo.png')} />
        <br />
        <div>
          <input
            style={{
              width: '200px',
              height: '20px'
            }}
            type="text"
            name="e-mail"
            placeholder="Sample@Website.com"
          />
          <button 
            className='btn'
            style={{
              height: '27px',
              fontWeight: 'bold'
            }}
          >Submit</button>
        </div>
        <h3 style={{
          fontFamily: 'Times New Roman',
          fontStyle: 'italic',
          fontWeight: 'bold'
        }}>
            BACK IN AUGUST
          <br />
            SIGN UP FOR FIRST UPDATES
          <br />
            LOVE YOU ALL
        </h3> 
      </div>
    );
  }
}

export default LandingPage;