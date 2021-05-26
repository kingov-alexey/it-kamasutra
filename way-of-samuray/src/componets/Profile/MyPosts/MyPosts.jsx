import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = props => {
  //BLL
  let postData = [
    { id: 0, message: 'Hi! My post', likeCount: 20 },
    { id: 1, message: 'Help me please. My post', likeCount: 88 },
    { id: 2, message: 'How I can go to CityMall? My post', likeCount: 60 },
    { id: 3, message: 'Thanks! My post', likeCount: 44 },
  ];

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
        <div className={s.posts}>
          <Post message={postData[0].message} likeCount={postData[0].likeCount} />
          <Post message={postData[1].message} likeCount={postData[1].likeCount} />
          <Post message={postData[2].message} likeCount={postData[2].likeCount} />
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
