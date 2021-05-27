import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = props => {
  let dialogsElements = props.state.dialogs.map(d => {
    return <DialogItem name={d.name} id={d.id} />;
  });

  let messagesElements = props.state.messages.map(m => {
    return <Message message={m.message} id={m.id} />;
  });

  let newPostElement = React.createRef();

  let addMessage = () => {
    let text = newPostElement.current.value;

    alert(text);
  };

  return (
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>{dialogsElements}</div>
      <div className={css.messages}>{messagesElements}</div>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
