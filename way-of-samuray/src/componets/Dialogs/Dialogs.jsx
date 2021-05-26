import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = props => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={s.dialog}>
      {/* <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}> */}
      <NavLink to={path} activeClassName={s.active}>
        {props.name}
      </NavLink>
    </div>
  );
};

const Message = props => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = props => {
  //BLL
  let dialogsData = [
    { id: 0, name: 'Dimych' },
    { id: 1, name: 'Alexey' },
    { id: 2, name: 'Gary' },
    { id: 3, name: 'Tolik' },
    { id: 4, name: 'Vitek' },
    { id: 5, name: 'Igor' },
  ];

  let messagesData = [
    { id: 0, message: 'Hi!' },
    { id: 1, message: 'Help me please.' },
    { id: 2, message: 'How I can go to CityMall?' },
    { id: 3, message: 'Thanks!' },
    { id: 4, message: 'asdf,' },
    { id: 5, Message: 'asdfasdf.' },
  ];

  //UI
  let dialogsElements = dialogsData.map(dialog => {
    return <DialogItem name={dialog.name} id={dialog.id} />;
  });

  let messagesElements = messagesData.map(message => {
    return <Message message={message.message} id={message.id} />;
  });

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
