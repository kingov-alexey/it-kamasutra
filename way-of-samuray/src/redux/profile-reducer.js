const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    { id: 0, message: 'Hi! My post1', likeCount: 27 },
    { id: 1, message: 'Help me please. My post', likeCount: 88 },
    { id: 2, message: 'How I can go to CityMall? My post', likeCount: 60 },
    { id: 3, message: 'Thanks! My post', likeCount: 44 },
  ],

  newPostText: 'It-kamasutra.com',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likeCount: 0,
      };

      state.posts.push(newPost);
      state.newPostText = '';
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = text => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};
export default profileReducer;
