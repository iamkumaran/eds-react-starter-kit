import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './index.css';

export default function decorate(block: HTMLElement) {
  const clonedBlock = block.cloneNode(true) as HTMLElement;

  // render React components
  const root = createRoot(block);
  root.render(<App rootElem={block} block={clonedBlock} />);
}
