import React, { useState } from 'react';

const CreateNewGraphPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div>
      <h1>Create New Graph</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={handleDescriptionChange} />
        </label>
        <button type="submit">Create Graph</button>
      </form>
      {}
    </div>
  );
};

export default CreateNewGraphPage;
