import React from 'react';

const PricingPlanCard = ({ plan, cost, features }) => {
  return (
    <div>
      <h2>{plan}</h2>
      <p>{cost}/month/user</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default PricingPlanCard;
