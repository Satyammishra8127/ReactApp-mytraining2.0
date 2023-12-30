import React from 'react';
import ProfileDashboardPage from './components/ProfileDashboardPage';
import CreateNewGraphPage from './components/CreateNewGraphPage';
import GraphDetailsPage from './components/GraphDetailsPage';
import AccountSettings from './components/AccountSettings';
import PricingPage from './components/PricingPage';
import PricingPlanCard from './components/PricingPlanCard';
function App() {
  return (
    <div>
    <AccountSettings/>
    <CreateNewGraphPage/>
    <PricingPage/>
    <ProfileDashboardPage/>
    <PricingPlanCard/>
    <GraphDetailsPage/>
    </div>

    )
  };
    
export default App;
