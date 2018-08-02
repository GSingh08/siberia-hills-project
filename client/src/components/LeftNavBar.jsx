import React, { Component } from 'react';
import NavButton from './NavButton';

class LeftNavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Links: [
        'Shop',
        'Gallery',
        'Stockists',
        'Stories',
        'Help'
      ]
    };
  }

  render() {
    return (
      <div>
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
  
};

// let LinkButtons = Links.map((name) => {
//   let renderColor = props.currentView.toUpperCase() === name ? 'red' : 'black';
//   return (
//     <div key={name}>
//       <button 
//         style={{
//           backgroundColor: 'ivory',
//           color: renderColor,
//           border: 'none',
//           fontSize: '20px'
//         }}
//         // onClick={{}}
//       >
//         {name}
//       </button>
//     </div>
//   );
// });

export default LeftNavBar;