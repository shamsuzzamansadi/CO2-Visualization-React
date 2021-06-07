import { Meteor } from 'meteor/meteor';
import { CarbonValuesCollection } from '/imports/api/carbonValues.js';

// function insertLink({ title, url }) {
//   LinksCollection.insert({title, url, createdAt: new Date()});
// }
async function insertCarbonValue({level, value}){
  CarbonValuesCollection.insert({level, value, hasBeenUsed: true});
}

const timeout = millis => new Promise(resolve => setTimeout(resolve, millis));  


Meteor.startup(async () => {
  // If the Links collection is empty, add some data.
  timeout(10000);

  co2Values = Math.floor(Math.random() * (5000 - 350 + 1) + 350);
  if (await CarbonValuesCollection.find().count() === 0) {
    insertCarbonValue({
      level: 'green',
      value: `${co2Values}`
    });

  }

});
