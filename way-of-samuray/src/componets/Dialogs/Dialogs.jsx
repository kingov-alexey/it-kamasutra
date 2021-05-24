import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = props => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>Игорь1</div>
        <div className={s.dialog}>Игорь2</div>
        <div className={s.dialog}>Аскар</div>
        <div className={s.dialog}>Толян</div>
        <div className={s.dialog}>Витек</div>
        <div className={s.dialog}>Стас</div>
        <div className={s.dialog}>Азиз</div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>asdfasdf</div>
        <div className={s.message}>asdfasdf</div>
      </div>
    </div>
  );
};

export default Dialogs;
