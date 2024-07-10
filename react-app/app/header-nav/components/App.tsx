import React, { FC, useEffect } from 'react';
import { useEmitter } from '../../../library/pubsub';

interface AppProps {
  elem: HTMLElement;
}

const App: FC<AppProps> = ({ elem }) => {
  // const { publishEvent } = useListener();
  const dispatch = useEmitter('userLoggedIn');

  const handleClick = () => {
    dispatch({ message: 'john_doe' });
  };

  console.log('root element', elem);
  return (
    <>
      <h1>New Component is Here.</h1>
      <button onClick={handleClick}>Login</button>
    </>
  );
};

export default App;
