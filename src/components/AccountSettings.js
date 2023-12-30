
import React, { useState } from 'react';

const AccountSettings = ({ user }) => {
  const [newName, setNewName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newSubscriptionPlan, setNewSubscriptionPlan] = useState('');

  const handleNameChange = (e) => setNewName(e.target.value);
  const handlePasswordChange = (e) => setNewPassword(e.target.value);
  const handleSubscriptionPlanChange = (e) => setNewSubscriptionPlan(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <div>
      <h1>Account Settings</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Update Name:
          <input type="text" value={newName} onChange={handleNameChange} />
        </label>
        <label>
          Change Password:
          <input type="password" value={newPassword} onChange={handlePasswordChange} />
        </label>
        <label>
          Manage Subscription Plan:
          <input
            type="text"
            value={newSubscriptionPlan}
            onChange={handleSubscriptionPlanChange}
          />
        </label>
        <button type="submit">Update Settings</button>
      </form>
      {

      }
    </div>
  );
};

export default AccountSettings;
