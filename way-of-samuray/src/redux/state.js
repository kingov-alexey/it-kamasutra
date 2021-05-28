let rerenderEntireTree = () => {
  console.log('state changed');
};

let state = {
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
};

window.state = state;

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likeCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};

export const updateNewPostText = newText => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const subscribe = observer => {
  rerenderEntireTree = observer;
};

export default state;
