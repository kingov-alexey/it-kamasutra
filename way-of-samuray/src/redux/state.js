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
    },

    sidebar: {},
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log('state changed');
  },

  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likeCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;

window.store = store;
