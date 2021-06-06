import React, { useState } from 'react';
import Push from "push.js";
import wait from "/imports/wait.js";
import CO2Values from "/imports/api/CO2Values.js";


export const Hello = () => {
  
  
  
  const start = () => {
    while(wait(10000)){
      //generating random Integer value between 350 and 5000 ppm
      let findData = CO2Values.find().fetch();
      for(i=0;i< findData.length;i++){
        if(findData[i].hasBeenUsed === false)
        {
          carbonValue = findData[i].co2values;
          console.log('this one is used: ' + findData[i].hasBeenUsed['false']);
          
        }
      }
      console.log("vaule of carbonValue:", carbonValue);
      console.log("Initiation the Push Notification");
  
      if(carbonValue<=1000){
          Push.create("Green");
      }
      else if(carbonValue > 1000 && carbonValue <=2000){
          Push.create("Yellow");
      }
      else if(carbonValue > 2000){
          Push.create("Red");
      }
    }
  };

  return (
    <div>
      <button onClick={start}>Click Me</button>
      <p>You've pressed the button {counter} times.</p>
    </div>
  );


};
