import React from 'react';

const SecondDepthButtons = (counter, { JSONData }) => {
  console.log(counter);
  console.log('function executed');

  // setShowDiv(!showDiv);
  const firstDepthValue = Object.values(JSONData);
  const secondDepthKeys = Object.keys(firstDepthValue[counter]);
  console.log(secondDepthKeys);

  return secondDepthKeys.map((button, key) => {
    return (
      <div
        className='w3-sidebar w3-bar-block w3-black w3-card'
        style={{ width: '130px' }}>
        <span className='w3-bar-item w3-button tablink' key={key}>
          {button}
        </span>
      </div>
    );
  });
};

export default SecondDepthButtons;
