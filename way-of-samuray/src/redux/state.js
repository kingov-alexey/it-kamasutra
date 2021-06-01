const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 0, message: 'Hi! My post1', likeCount: 27 },
        { id: 1, message: 'Help me please. My post', likeCount: 88 },
        { id: 2, message: 'How I can go to CityMall? My post', likeCount: 60 },
        { id: 3, message: 'Thanks! My post', likeCount: 44 },
      ],

      newPostText: 'It-kamasutra.com',
    },

    dialogsPage: {
      dialogs: [
        { id: 0, name: 'Dimych' },
        { id: 1, name: 'Alexey' },
        { id: 2, name: 'Gary' },
        { id: 3, name: 'Tolik' },
        { id: 4, name: 'Vitek' },
        { id: 5, name: 'Igor' },
      ],
      messages: [
        { id: 0, message: 'Hi!' },
        { id: 1, message: 'Help me please.' },
        { id: 2, message: 'How I can go to CityMall?' },
        { id: 3, message: 'Thanks!' },
        { id: 4, message: 'asdf,' },
        { id: 5, Message: 'asdfasdf.' },
      ],

      newMessageBody: '',
    },

    sidebar: {},
  },

  _callSubscriber() {
    console.log('state changed');
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = '';
      this._state.dialogsPage.messages.push({ id: 999, message: body });
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = text => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = body => {
  debugger;
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  };
};
export default store;

window.store = store;
