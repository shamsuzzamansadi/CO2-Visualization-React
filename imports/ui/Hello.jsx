import React, { useState } from 'react';
import push from 'push.js';
import CarbonValuesCollection from '../api/carbonValues.js';

export const Hello = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  let carbonValue = CarbonValuesCollection.find().fetch();
  const carbonlevelNotify = () => {
    if(carbonValue.level['green']){
      push.create('green');
    }
    else if(carbonValue.level['yellow']){
      push.create('yellow');
    }
    else if(carbonValue.level['red']){
      push.create('red');
    }
  };
  
  return (
    <div>
      <button onClick={increment}>Click Me</button>
      <p>You've pressed the button {counter} times.</p>
      <p>Well have fun with the co2 level: {carbonlevelNotify} </p> 
    </div>
  );
};
