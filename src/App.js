import React, {useState} from 'react';
import {Message} from './Message';
import {Input} from './Input';
import {useFakeConvo} from './useFakeConvo';
import {useScrollToBottom} from './useScrollToBottom';
import {useChatReducer} from './chatReducer';
import {ChatProvider} from './useChat';

export const App = () => {
  let [state, dispatch] = useChatReducer();

  // useFakeMessage({
  //   setMessages,
  //   message: 'Hello from another side',
  // });
  useFakeConvo(dispatch);

  let scrollRef = useScrollToBottom(state.messages);

  return (
    <div style={styles.wrapper}>
      <div style={styles.container} ref={(ref) => (scrollRef.current = ref)}>
        {state.messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <Input
        value={state.currentMessage}
        onChange={(message) => dispatch({type: 'setCurrentMessage', message})}
        onEnter={(message) => dispatch({type: 'addMessage', message})}
      />
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
