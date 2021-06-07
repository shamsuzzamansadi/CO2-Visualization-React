import React, { useState } from 'react';
import push from 'push.js';
import { CarbonValuesCollection } from '../api/carbons.js';

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

  const carbonlevelNotify = async () => {
    if(await carbonValue.level['green']){
      await push.create('green');
    }
    else if(await carbonValue.level['yellow']){
     await push.create('yellow');
    }
    else if(await carbonValue.level['red']) {
      await push.create('red');
    }
  };
  
  return (
    <div>
      <button onClick={increment}>Click Me</button>
      <p>You've pressed the button {counter} times.</p>
      <p>You've started the carbonNotification: Level of color: {carbonlevelNotify.level} Carbon value: {carbonlevelNotify.value} times.</p>
    </div>
  );
};
