import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 0, message: 'Hi! My post1', likeCount: 26 },
  { id: 1, message: 'Help me please. My post', likeCount: 88 },
  { id: 2, message: 'How I can go to CityMall? My post', likeCount: 60 },
  { id: 3, message: 'Thanks! My post', likeCount: 44 },
];

let dialogs = [
  { id: 0, name: 'Dimych' },
  { id: 1, name: 'Alexey' },
  { id: 2, name: 'Gary' },
  { id: 3, name: 'Tolik' },
  { id: 4, name: 'Vitek' },
  { id: 5, name: 'Igor' },
];

let messages = [
  { id: 0, message: 'Hi!' },
  { id: 1, message: 'Help me please.' },
  { id: 2, message: 'How I can go to CityMall?' },
  { id: 3, message: 'Thanks!' },
  { id: 4, message: 'asdf,' },
  { id: 5, Message: 'asdfasdf.' },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
