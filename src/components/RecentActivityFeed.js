import React from 'react';

const RecentActivityFeed = ({ recentGraphs, recentCollections, recentQueries }) => {
  return (
    <div>
      <h2>Recent Activity Feed</h2>
      <p>Recent Graphs: {recentGraphs.join(', ')}</p>
      <p>Recent Collections: {recentCollections.join(', ')}</p>
      <p>Recent Queries: {recentQueries.join(', ')}</p>
    </div>
  );
};

export default RecentActivityFeed;
