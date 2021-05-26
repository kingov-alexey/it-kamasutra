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
    { id: 2, name: 'Gary*' },
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
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message} id={messagesData[0].id} />
        <Message message={messagesData[1].message} id={messagesData[1].id} />
        <Message message={messagesData[2].message} id={messagesData[2].id} />
        <Message message={messagesData[3].message} id={messagesData[3].id} />
      </div>
    </div>
  );
};

export default Dialogs;
