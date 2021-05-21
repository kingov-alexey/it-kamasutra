import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={css.content}>
      <div>
        my posts
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <div className={css.posts}>
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
