/* eslint-disable no-lone-blocks */
import React, { useState } from 'react';
import SecondDepthButtons from './SecondDepthButtons';

const JSONData = require('./aekr1SPc.json');
const Sharedtextarea = () => {
  const firstDepthKeys = Object.keys(JSONData);

  const [showDiv, setShowDiv] = useState(false);

  // const secondDepthValue = Object.values(firstDepthValue[2]);

  const executeMe = () => setShowDiv(!showDiv);

  const renderFirstDepthButtons = (firstDepthKeys) => {
    while (firstDepthKeys.length) {
      return firstDepthKeys.map((button, counter) => {
        return (
          <span key={counter}>
            <button
              className='w3-bar-item w3-button w3-blue '
              onClick={() => executeMe}>
              {button}
            </button>
            {showDiv && (
              <SecondDepthButtons counter={counter} JSONData={JSONData} />
            )}
          </span>
        );
      });
    }
  };

  return renderFirstDepthButtons(firstDepthKeys);
};

export default Sharedtextarea;
