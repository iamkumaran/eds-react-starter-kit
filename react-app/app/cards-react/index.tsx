import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './index.css';
import { createOptimizedPicture } from '../../../scripts/aem';

export default function decorate(block: HTMLElement) {
  // Extract the content
  const content: { texts: string; images: string; }[] = [];
  [...block.children].forEach(item => {
    // image data
    const imgDiv = item.querySelector('div:nth-child(1)');
    // content data
    const contentDiv = item.querySelector('div:nth-child(2)');
    // create optimized images
    const imgElem = imgDiv.querySelector('img');
    const optimizedImg = createOptimizedPicture(imgElem.src, imgElem.alt, false, [{ width: '750' }]);
    console.log('createOptimizedPicture()', optimizedImg.innerHTML);
    content.push({texts: contentDiv.innerHTML, images: optimizedImg.innerHTML});
  });


  // render React components and 
  const root = createRoot(block);
  root.render(<App content={content} />);
}
