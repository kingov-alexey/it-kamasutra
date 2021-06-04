const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.messages.push({ id: 999, message: body });
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = body => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  };
};
export default dialogsReducer;
