import React, { Component } from 'react';
import LandingPage from './components/LandingPage';
import Header from './containers/Header';
import Main from './containers/Main';


class App extends Component {
  constructor() {
    super();

    this.state = {
      emailSignup: false
    };

    this.closeLandingPage = this.closeLandingPage.bind(this);
  }
  
  closeLandingPage () {
    console.log('hi');
    this.setState({
      emailSignup: true
    });
  }

  render() {
    if (!this.state.emailSignup) {
      return (
        <div>
          <LandingPage 
            checkClick={this.closeLandingPage}
            style={{ textAlign: 'center' }}/>
        </div>
      );
    } else {
      return (
        <div>
          <Header />
          <Main />
        </div>
      );
    }
  }
}

export default App;
