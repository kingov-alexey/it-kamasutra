import React from 'react';

import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import css from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = props => {
  debugger;
  return (
    <div>
      <ProfileInfo />

      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
