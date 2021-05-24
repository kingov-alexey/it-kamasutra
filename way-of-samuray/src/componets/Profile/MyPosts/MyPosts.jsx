import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={s.postsBlock}>
      <div>
        <h3> my posts</h3>
        <div>
          <div>
            <textarea></textarea>
          </div>
          <div>
            <button>Add post</button>
          </div>
        </div>
        <div className={s.posts}>
          <Post message="Hello world!" like="15" />
          <Post message="asdfasdf" like="20" />
          <Post message="Hello world3" like="20" />
          <Post message="Hello world4" like="31" />
          <Post message="Hello world5" like="20" />
          <Post message="Hello world6" like="20" />
          <Post message="Hello world7" like="20" />
          <Post message="Hello world8" like="20" />
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
