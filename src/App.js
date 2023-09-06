import React from 'react';
import {ChatInput} from './Input';
import {ChatMessage} from './Message';
import {ChatProvider} from './useChat';
import {useFakeConvo} from './useFakeConvo';
import {useScrollToBottom} from './useScrollToBottom';
import {useChat} from './useChat';

export const App = () => {
  let {state} = useChat();

  // useFakeMessage({
  //   setMessages,
  //   message: 'Hello from another side',P
  // });
  useFakeConvo();

  let scrollRef = useScrollToBottom();

  return (
    <div style={styles.wrapper}>
      <div style={styles.container} ref={(ref) => (scrollRef.current = ref)}>
        {state.messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>
      <ChatInput />
    </div>
  );
};

export const AppContainer = () => {
  return (
    <ChatProvider>
      <App />
    </ChatProvider>
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
