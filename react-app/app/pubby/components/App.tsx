import React, { FC, useEffect, useState } from 'react';
import { useListener } from '../../../library/pubsub';

interface AppProps {
  elem: HTMLElement;
}

const App: FC<AppProps> = ({ elem }) => {
  const [state, setState] = useState('');

  useListener('userLoggedIn', (e: CustomEvent) => setState(e.detail.message));
  
  return <h1>Your new Component <i>pubby</i> is here. State is {state}</h1>;
};

export default App;
