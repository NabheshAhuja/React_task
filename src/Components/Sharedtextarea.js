/* eslint-disable no-lone-blocks */
import React, { useState } from 'react';
import SecondDepthButtons from './SecondDepthButtons';

const JSONData = require('./aekr1SPc.json');
const Sharedtextarea = () => {
  const firstDepthKeys = Object.keys(JSONData);

  const [showDiv, setShowDiv] = useState(0);

  // const secondDepthValue = Object.values(firstDepthValue[2]);

  const executeMe = (key) =>{ 
    setShowDiv(key);
    console.log('executed');
    console.log(key);
    const firstDepthValue = Object.values(JSONData);
    const secondDepthKeys = Object.keys(firstDepthValue[key]);
    console.log(secondDepthKeys);

    return secondDepthKeys.map((button, key) => {
      return showDiv && (
        <div
          key={key}
          className='w3-sidebar w3-bar-block w3-black w3-card'
          style={{ width: '130px' }}>
          <span className='w3-bar-item w3-button tablink' >
            {button}
          </span>
        </div>
      );
    });
  }
  const renderFirstDepthButtons = (firstDepthKeys) => {
    // while (firstDepthKeys.length) {
      return firstDepthKeys.map((button, key) => {
        return (
          <span key={key}>
            <button
              className='w3-bar-item w3-button w3-blue '
              onClick={() => executeMe(key)}>
              {button}
            </button>
            {/* {showDiv && (
              SecondDepthButtons(key)
            )} */}
          </span>
        );
      });
    // }
  };

  const SecondDepthButtons = (key) => {
    console.log('function executed');
  console.log(key);
    // setShowDiv(!showDiv);
    const firstDepthValue = Object.values(JSONData);
    const secondDepthKeys = Object.keys(firstDepthValue[key]);
    // console.log(secondDepthKeys);
  
    return secondDepthKeys.map((button, key) => {
      return (
        <div
          key={key}
          className='w3-sidebar w3-bar-block w3-black w3-card'
          style={{ width: '130px' }}>
          <span className='w3-bar-item w3-button tablink' >
            {button}
          </span>
        </div>
      );
    });
  };
  

  return renderFirstDepthButtons(firstDepthKeys);
};

export default Sharedtextarea;
