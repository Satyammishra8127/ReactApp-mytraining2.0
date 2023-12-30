import React from 'react';

const UserProfileDetails = ({ name, email, profilePhoto, bio }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <img src={profilePhoto} alt="Profile" />
      <p>Bio: {bio}</p>
    </div>
  );
};

export default UserProfileDetails;
