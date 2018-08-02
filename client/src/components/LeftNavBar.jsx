import React from 'react';

const LeftNavBar = (props) => {
  const Links = [
    'SHOP',
    'GALLERY',
    'STOCKISTS',
    'STORIES',
    'HELP'
  ];

  let LinkButtons = Links.map((name) => {
    return (
      <div>
        <button 
          style={{
            backgroundColor: 'ivory',
            color: 'black',
            border: 'none'
          }}
          onClick={{}}
        >
          {name}
        </button>
      </div>
    );
  });

  return LinkButtons;
};

export default LeftNavBar;