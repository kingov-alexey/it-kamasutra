import React from 'react';
import StoreContext from '../../../StoreContext';
import {
  updateNewPostTextActionCreator,
  addPostActionCreator,
} from './../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = props => {
  //let state = props.store.getState();
  debugger;
  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState();
        let onAddPost = () => {
          store.dispatch(addPostActionCreator());
        };

        let onPostChange = text => {
          let action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
        };
        return (
          <MyPosts
            updateNewPostText={onPostChange}
            onAddPost={onAddPost}
            posts={store.getState().profilePage.posts}
            newPostText={store.getState().profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
