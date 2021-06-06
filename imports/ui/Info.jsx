import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { CarbonValuesCollection } from '../api/carbonValues.js';

export const Info = () => {
  const carbonValues = useTracker(() => {
    return CarbonValuesCollection.find().fetch();
  });

  return (
    <div>
      <h2>Learn about CO2!</h2>
      <ul>{carbonValues.map(
        carbonValue => <li key={carbonValue._id}>
          <p>{carbonValue.value}{link.level}</p>
        </li>
      )}</ul>
    </div>
  );
};
