import { Meteor } from 'meteor/meteor';

import C02values from '/imports/api/CO2Values.js';

Meteor.startup(() => {
  let co2Values = 0 ;
  while(wait(10000)){
    co2Values = Math.floor(Math.random() * (5000 - 350 + 1) + 350);
    C02values.insert({
      co2values: `${co2Values}`,
      hasUsed: true
    });

  }

  console.log(CO2Values.find().fetch());
});

function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}