import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = props => {
  let postsElements = props.posts.map(p => {
    return <Post message={p.message} likeCount={p.likeCount} />;
  });

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.onAddPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.postsBlock}>
      <div>
        <h3> my posts</h3>
        <div>
          <div>
            <textarea
              onChange={onPostChange}
              ref={newPostElement}
              value={props.newPostText}
            ></textarea>
          </div>
          <div>
            <button onClick={onAddPost}>Add post</button>
          </div>
        </div>
        <div className={s.posts}>{postsElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;
