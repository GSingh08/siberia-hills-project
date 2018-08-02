import React, { Component } from 'react';
import LeftNavBar from '../components/LeftNavBar';
import RightNavBar from '../components/RightNavBar';
import Shop from '../components/Shop';
import Help from '../components/Help';
import Gallery from '../components/Gallery';
import Stockists from '../components/Stockists';
import Stories from '../components/Stories';


class Main extends Component {
  constructor() {
    super();

    this.state = {
      views: {
        SHOP: <Shop />,
        HELP: <Help />,
        GALLERY: <Gallery />,
        STOCKISTS: <Stockists />,
        STORIES: <Stories />
      },
      view: 'SHOP'
    };

    this.handleNavigationClick = this.handleNavigationClick.bind(this);

  }

  handleNavigationClick(e) {
    console.log('e', e);
    let name = e.target.innerHTML;
    let modifiedName = 
    this.setState({
      view: e.target.innerHTML
    }, () => {  console.log(this.state.view); });
  }

  render() {
    let content = this.state.views[this.state.view];
    return (
      <div style={{
        display: 'flex'
      }}>
        <LeftNavBar 
          currentView={this.state.view}
          navClick={this.handleNavigationClick}/>
        <div className="content"
          style={{
            flex: 5,
            margin: '0px 50px 0px 50px',
            border: '1px solid black'
          }}>
          {content}
        </div>
        <RightNavBar />
      </div>
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