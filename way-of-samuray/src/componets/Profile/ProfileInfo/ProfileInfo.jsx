import React from 'react';

import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="http://www.vkrg.kz/images/img1.jpg" />
      </div>
      <div className={s.descriptionBlock}>ava + description!</div>
    </div>
  );
};

export default ProfileInfo;
