import React, { useState } from 'react';
import { Message } from './Message';

const initialMessages = [
  { id: 1, content: 'Hello there!', from: 'me' },
  { id: 2, content: 'How are you doing?', from: 'Steven' },
  { id: 3, content: 'Pretty Good', from: 'me' },
];

export const App = () => {
  let [messages, setMessages] = useState(initialMessages);
  let [currentMessage, setCurrentMessage] = useState('');


  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  container: {
    display: 'flex',
    overflow: 'scroll',
    height: 'max-content',
    flexDirection: 'column',
  },
};
export default App;
