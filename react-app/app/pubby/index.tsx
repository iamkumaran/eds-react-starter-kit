import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './index.css';
import { onRender } from '../../utils/baseUtils';

// render react component
const initFn = (el: HTMLElement) => {
  if (el) {
    const $el = el;
    const root = createRoot($el);
    root.render(<App elem={$el} />);
    $el.dataset.reactStatus = 'loaded';
  }
};

// render React components
onRender('.pubby', initFn);
