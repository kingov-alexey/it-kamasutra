import React from 'react';
import s from './Post.module.css';

const Post = props => {
  return (
    <div className={s.item}>
      <img src="https://st3.depositphotos.com/1471096/33477/i/1600/depositphotos_334771830-stock-photo-grunge-background-with-graffiti-and.jpg" />
      {props.message}
      <div>
        <span>{props.likeCount}</span>
      </div>
    </div>
  );
};

export default Post;
