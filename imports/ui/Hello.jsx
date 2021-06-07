import React, { useState } from 'react';
import Push from 'push.js';
import { CarbonValuesCollection } from '../api/carbonValues.js';

export function Hello() {
  const [counter, setCounter] = useState(0);
  const timeout = millis => new Promise(resolve => setTimeout(resolve, millis));
  const increment = () => {
    setCounter(counter + 1);
  };


  let carbonValue = CarbonValuesCollection.find().fetch();
 
  const carbonlevelNotify = () => {
    console.log('co2 dataset: ',carbonValue);
    console.log('CO2 value: ',carbonValue.value, 'CO2 level: ', carbonValue.level);
    
    if(carbonValue.value <= 1000){
       Push.create('green');
       console.log('green co2');
    }
    else if( carbonValue.value > 1000 && carbonValue.value <= 2000){
     Push.create('yellow');
     console.log('yellow');
    }
    else if( carbonValue.value > 2000) {
      Push.create('red');
      console.log('red');
    }
  };
  
  return (
    <div>
      <button onClick={increment}>Click Me</button>
      <p>You've pressed the button {counter} times.</p>
      <p>You've started Carbon value: {carbonlevelNotify()}.</p>
    </div>
  );
};
