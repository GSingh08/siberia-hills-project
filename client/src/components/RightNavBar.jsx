import React, { Component } from 'react';
import NavButton from './NavButton';

class RightNavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Links: [
        'Cart'
      ]
    };
  }

  render() {
    return (
      <div style={styles}>
        {this.state.Links.map(link => {
          return (
            <NavButton 
              key={link}
              name={link}
              currentView={this.props.currentView}
              navClick={this.props.navClick}/>
          );
        })}
      </div>
    );
  }
}

const styles = {
  flex: 1
};

export default RightNavBar;