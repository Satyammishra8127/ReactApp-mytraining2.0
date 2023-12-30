import React from 'react';

const UsageMetrics = ({ graphsCreated, graphsShared, papersCollected }) => {
  return (
    <div>
      <h2>Usage Metrics</h2>
      <p>Graphs Created: {graphsCreated}</p>
      <p>Graphs Shared: {graphsShared}</p>
      <p>Papers Collected: {papersCollected}</p>
    </div>
  );
};

export default UsageMetrics;
