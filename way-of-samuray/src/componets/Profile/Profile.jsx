import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import css from './Profile.module.css';

const Profile = () => {
  return (
    <div>
      <div>
        <img src="http://www.vkrg.kz/images/img1.jpg" />
      </div>
      <div>ava + description!</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
