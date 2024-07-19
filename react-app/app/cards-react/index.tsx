import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './index.css';
import { onRender } from '../../utils/baseUtils';

// render react component
// const initFn = (el: HTMLElement) => {
//   if (el) {
//     const $el = el;
//     const root = createRoot($el);
//     root.render(<App elem={$el} />);
//     $el.dataset.reactStatus = 'loaded';
//   }
// };
alert('dsdsdsds');
export default function decorate(block: any) {
  // render React components
  const data: { content: string | TrustedHTML; images: string | TrustedHTML }[] = [];
  [...block.children].forEach(item => {
    console.log(item);
    return data.push({
      images: item.querySelector('div:nth-child(1)').innerHTML,
      content: item.querySelector('div:nth-child(2)').innerHTML,
    });
  });
  console.log('cards-rect data', data);
  // onRender('.cards-react', initFn);
  const root = createRoot(block);
  root.render(<App block={block} data={data} />);
}
