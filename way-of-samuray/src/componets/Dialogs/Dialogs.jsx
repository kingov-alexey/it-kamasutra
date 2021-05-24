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
  return <div className={s.message}>{props.message}}</div>;
};

const Dialogs = props => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="dimych" id="0" />
        <DialogItem name="Alexey" id="1" />
        <DialogItem name="Gary" id="2" />
        <DialogItem name="Igor" id="3" />
        <DialogItem name="Tolik" id="4" />
        <DialogItem name="Vitek" id="5" />
      </div>
      <div className={s.messages}>
        <Message message="aaaa sss dd f " />
        <Message message="asdf" />
        <Message message="fdas" />
        <Message message="234234" />
      </div>
    </div>
  );
};

export default Dialogs;
