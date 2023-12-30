import React from 'react';
import UserProfileDetails from './UserProfileDetails';
import AccountDetails from './AccountDetails';
import UsageMetrics from './UsageMetrics';
import RecentActivityFeed from './RecentActivityFeed';
import ActionButtons from './ActionButtons';
import SavedGraphsList from './SavedGraphsList';
import { Link } from 'react-router-dom';

const ProfileDashboardPage = () => {
 
  const userData = {
    name: 'John Doe',
    email: 'john@example.com',
    profilePhoto: 'profile.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  };

  const accountData = {
    subscriptionPlan: 'Premium',
    subscriptionStatus: 'Active',
  };

  const usageMetricsData = {
    graphsCreated: 20,
    graphsShared: 10,
    papersCollected: 30,
  };

  const recentActivityData = {
    recentGraphs: ['Graph 1', 'Graph 2'],
    recentCollections: ['Collection 1', 'Collection 2'],
    recentQueries: ['Query 1', 'Query 2'],
  };

  const savedGraphsData = [
    {
      id: 1,
      title: 'Graph A',
      dateCreated: '2023-01-01',
      previewThumbnail: 'graphA.jpg',
    },
    {
      id: 2,
      title: 'Graph B',
      dateCreated: '2023-01-05',
      previewThumbnail: 'graphB.jpg',
    },
  ];

  const handleCreateGraph = () => {
   
  };

  const handleShareGraph = () => {
    
  };

  const handleUploadPapers = () => {
  };

  return (
    <div>
      <UserProfileDetails {...userData} />
      <AccountDetails {...accountData} />
      <UsageMetrics {...usageMetricsData} />
      <RecentActivityFeed {...recentActivityData} />
      <ActionButtons
        onCreateGraph={handleCreateGraph}
        onShareGraph={handleShareGraph}
        onUploadPapers={handleUploadPapers}
      />
      <SavedGraphsList savedGraphs={savedGraphsData} />
      <div>
        <Link to="/favorites">Favourites</Link>
        <Link to="/collections">Collections</Link>
      </div>
    </div>
  );
};

export default ProfileDashboardPage;
