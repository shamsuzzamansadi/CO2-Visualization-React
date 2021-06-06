import { Meteor } from 'meteor/meteor';
import { CarbonValuesCollection } from '/imports/api/carbonValues.js';

// function insertLink({ title, url }) {
//   LinksCollection.insert({title, url, createdAt: new Date()});
// }
function insertCarbonValue({level, value}){
  CarbonValuesCollection.insert({level, value, hasBeenUsed: true});
}

const timeout = millis => new Promise(resolve => setTimeout(resolve, millis))  


Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  // if (LinksCollection.find().count() === 0) {
  //   insertLink({
  //     title: 'Do the Tutorial',
  //     url: 'https://www.meteor.com/tutorials/react/creating-an-app'
  //   });

  //   insertLink({
  //     title: 'Follow the Guide',
  //     url: 'http://guide.meteor.com'
  //   });

  //   insertLink({
  //     title: 'Read the Docs',
  //     url: 'https://docs.meteor.com'
  //   });

  //   insertLink({
  //     title: 'Discussions',
  //     url: 'https://forums.meteor.com'
  //   });
  // }
  while(timeout(10000)){
    co2Values = Math.floor(Math.random() * (5000 - 350 + 1) + 350);
    if(co2Values <= 1000){
      insertCarbonValue({
        level: 'green',
        value: `${co2Values}`
      });
    }
    else if(co2Values >= 1000 && co2Values <=2000){
      insertCarbonValue({
        level: 'yellow',
        value: `${co2Values}`
      });
    }
    else if(co2Values > 2000){
      insertCarbonValue({
        level: 'red',
        value: `${co2Values}`
      });
    }
  }

});
