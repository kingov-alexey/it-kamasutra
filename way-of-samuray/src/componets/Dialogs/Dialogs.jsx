import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = props => {
  //BLL
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

  let dialogsElements = dialogs.map(d => {
    return <DialogItem name={d.name} id={d.id} />;
  });

  let messagesElements = messages.map(m => {
    return <Message message={m.message} id={m.id} />;
  });

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
