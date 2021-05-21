import React from 'react';
import css from './Profile.module.css';

const Profile = () => {
  return (
    <div className={css.content}>
      <div>
        <img src="http://www.vkrg.kz/images/img1.jpg" />
      </div>
      <div>ava + description!</div>
      <div>
        my posts
        <div>New post</div>
        <div className={css.posts}>
          <div className={css.item}>post 1</div>
          <div className={css.item}>post 2</div>
          <div className={css.item}>post 3</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
