import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './index.css';

export default function decorate(block: HTMLElement) {
  // render React components
  const root = createRoot(block.children[1]);
  root.render(<App />);
}
