import React from 'react';

const SavedGraphsList = ({ savedGraphs }) => {
  return (
    <div>
      <h2>Saved Graphs</h2>
      <ul>
        {savedGraphs.map((graph) => (
          <li key={graph.id}>
            <p>Title: {graph.title}</p>
            <p>Date Created: {graph.dateCreated}</p>
            <img src={graph.previewThumbnail} alt="Graph Preview" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedGraphsList;
