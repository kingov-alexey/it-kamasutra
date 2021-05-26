import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = props => {
  //BLL
  let posts = [
    { id: 0, message: 'Hi! My post', likeCount: 20 },
    { id: 1, message: 'Help me please. My post', likeCount: 88 },
    { id: 2, message: 'How I can go to CityMall? My post', likeCount: 60 },
    { id: 3, message: 'Thanks! My post', likeCount: 44 },
  ];

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
