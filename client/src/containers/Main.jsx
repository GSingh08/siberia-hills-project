import React, { Component } from 'react';
import LeftNavBar from '../components/LeftNavBar';

class Main extends Component {
  constructor() {
    super();


  }

  render() {
    return (
      <LeftNavBar />
    );
  }
}

export default Main;

/* 
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Shop from '../components/Shop'
import Gallery from '../components/Gallery'
import Stockists from '../components/Stockists'
import Stories from '../components/Stories'
import Help from '../components/Help'
import './Main.css';

class Main extends Component {
  constructor() {
    super();


  }

  render() {
    return (
      <Router>
      <div>
       <Route path="/shop" component={Shop} />
       <Route path="/gallery" component={Gallery} />
       <Route path="/stockists" component={Stockists} />
       <Route path="/stories" component={Stories} />
       <Route path="/help" component={Help} />
     </div>
   </Router>
    );
  }
}

export default Main;
*/