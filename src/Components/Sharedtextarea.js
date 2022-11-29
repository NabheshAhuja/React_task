import React, { useState, useEffect, useMemo } from 'react';
import './Sharedtextarea.css';
const data = require('./aekr1SPc.json');
const Sharedtextarea = () => {
  let horiz = Object.keys(data).toString().split(',');
  console.log(horiz);
  const [horizontalMenu, setHorizontalMenuItem] = useState(horiz[0]);
  useEffect(() => {
    return <button>{horizontalMenu}</button>;
  });
};
export default Sharedtextarea;
