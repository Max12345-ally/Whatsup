import React, {useState} from 'react';
import {Message} from './Message';
import {Input} from './Input';
import {useFakeMessage} from './useFakeMessage';

const initialMessages = [
  {id: 1, content: 'Hello there!', from: 'me'},
  {id: 2, content: 'How are you doing?', from: 'Steven'},
  {id: 3, content: 'Pretty Good', from: 'me'},
];

export const App = () => {
  let [messages, setMessages] = useState(initialMessages);
  let [currentMessage, setCurrentMessage] = useState('');

  useFakeMessage({
    setMessages,
    message: 'Hello from another side',
  });

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <Input
        value={currentMessage}
        onChange={(content) => setCurrentMessage(content)}
        onEnter={(content) => {
          setCurrentMessage('');
          setMessages([
            ...messages,
            {id: messages.length + 1, content, from: 'me'},
          ]);
        }}
      />
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
