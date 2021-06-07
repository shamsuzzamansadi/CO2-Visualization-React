import React, { useState } from 'react';
import push from 'push.js';
import { CarbonValuesCollection } from '../api/carbonValues.js';

export async function Hello() {
  const [counter, setCounter] = useState(0);
  const timeout = millis => new Promise(resolve => setTimeout(resolve, millis));
  const increment = () => {
    setCounter(counter + 1);
  };


  let carbonValue = await CarbonValuesCollection.find().fetch();
  timeout(10000);
  for(i=0; i < carbonValue.length; i++){
    console.log('carbon level:',carbonValue[i].level);
  }

  const carbonlevelNotify = () => {
    console.log('co2 dataset: ',carbonValue);
    if(await carbonValue.value <= 1000){
      await push.create('green');
    }
    else if(await carbonValue.value > 1000 && await carbonValue.value <= 2000){
     await push.create('yellow');
    }
    else if(await carbonValue.value > 2000) {
      await push.create('red');
    }
  };
  
  return (
    <div>
      <button onClick={increment}>Click Me</button>
      <p>You've pressed the button {counter} times.</p>
      <p>You've started the carbonNotification: {carbonlevelNotify()} times.</p>
    </div>
  );
};
