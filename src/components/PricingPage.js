
import React, { useState } from 'react';
import PricingPlanCard from './PricingPlanCard';

const PricingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      plan: 'Basic Plan',
      cost: '$4',
      features: ['Up to 10 graphs', 'Up to 500 chatbot queries'],
    },
    {
      plan: 'Pro Plan',
      cost: '$8',
      features: ['Up to 50 graphs', 'Up to 1000 chatbot queries', 'Email + live chat support'],
    },
    {
      plan: 'Enterprise Plan',
      cost: 'Contact for price',
      features: ['Unlimited graphs', 'Ability to upload custom PDFs', '24/7 phone + email support'],
    },
  ];

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div>
      <h1>Pricing Plans</h1>
      <div>
        {plans.map((plan, index) => (
          <label key={index}>
            <input
              type="radio"
              name="pricingPlan"
              value={plan.plan}
              checked={selectedPlan === plan.plan}
              onChange={() => handleSelectPlan(plan.plan)}
            />
            <PricingPlanCard {...plan} />
          </label>
        ))}
      </div>
      {selectedPlan && (
        <div>
          <h2>Selected Plan: {selectedPlan}</h2>
          {

          }
        </div>
      )}
    </div>
  );
};

export default PricingPage;
