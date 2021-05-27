import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = props => {
  let posts = props.posts;

  let postsElements = posts.map(p => {
    return <Post message={p.message} likeCount={p.likeCount} />;
  });

  //UI
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
        <div className={s.posts}>{postsElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;
