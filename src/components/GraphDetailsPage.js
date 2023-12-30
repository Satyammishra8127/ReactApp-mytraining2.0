import React from 'react';

const GraphDetailsPage = ({ graph }) => {
  return (
    <div>
      <h1>Graph Details</h1>
      <h2>{graph.title}</h2>
      <p>Description: {graph.description}</p>
      <p>Date Created: {graph.dateCreated}</p>
      <button onClick={() => graph.title}>View Graph</button>
      <ul>
        {graph.papers.map((paper) => (
          <li key={paper.id}>
            {paper.title} - { }
            <button onClick={() => paper.title}>Edit</button>
            <button onClick={() => paper.title}>Share</button>
            <button onClick={() => paper.title}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GraphDetailsPage;
