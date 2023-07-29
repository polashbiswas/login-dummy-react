// src/Profile.js
import React, { useEffect, useState } from 'react';
import './profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get the user id from localStorage
    const userId = JSON.parse(localStorage.getItem('user')).id;
    console.log(userId);

    // Fetch user data using the saved id
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>{
      user &&
      <h2 className='profile-heading'>Profile Details Of: <span>{user.firstName}</span></h2>
    }
      <div className='profile-card'>
      {user ? (
        <div className='card'>
          <img src={user.image} alt="A man" />
          <div className='profile-container'>
            <h3>Username: <span>{user.username}</span></h3>
            <h3>Email: <span>{user.email}</span></h3>
            
            
            <h3>First Name: <span>{user.firstName}</span></h3>
            <h3>Last Name: <span>{user.lastName}</span></h3>
            
            <h3>Gender: <span>{user.gender}</span></h3>
          </div>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
      </div>
    </div>
  );
};

export default Profile;
