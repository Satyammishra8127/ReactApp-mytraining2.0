import React from 'react';

const AccountDetails = ({ subscriptionPlan, subscriptionStatus }) => {
  return (
    <div>
      <h2>Account Details</h2>
      <p>Subscription Plan: {subscriptionPlan}</p>
      <p>Status: {subscriptionStatus}</p>
    </div>
  );
};

export default AccountDetails;
