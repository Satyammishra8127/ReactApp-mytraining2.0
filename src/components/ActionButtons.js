import React from 'react';

const ActionButtons = ({ onCreateGraph, onShareGraph, onUploadPapers }) => {
  return (
    <div>
      <button onClick={onCreateGraph}>Create New Graph</button>
      <button onClick={onShareGraph}>Share Graphs</button>
      <button onClick={onUploadPapers}>Upload Papers</button>
    </div>
  );
};

export default ActionButtons;
