import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';

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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;

window.store = store;
