import React, { FC, lazy, Suspense } from 'react';
import { createOptimizedPicture } from '../../../../scripts/aem';
interface AppProps {
  rootElem: HTMLElement;
  block: HTMLElement;
}

const App: FC<AppProps> = ({ rootElem, block }) => {
  console.log('rootElem', rootElem);
  return (
    <ul>
      {[...block.children].map(item => {
        // image data
        const imgDiv = item.querySelector('div:nth-child(1)');
        // content data
        const contentDiv = item.querySelector('div:nth-child(2)');
        // create optimized images
        const imgElem = imgDiv.querySelector('img');
        const optimizedImg = createOptimizedPicture(imgElem.src, imgElem.alt, false, [{ width: '750' }]);
        console.log('createOptimizedPicture()', optimizedImg.innerHTML);
        return (
          <li>
            <div className="cards-card-image">
              <picture dangerouslySetInnerHTML={{ __html: optimizedImg.innerHTML }} />
            </div>
            <div className="cards-card-body" dangerouslySetInnerHTML={{ __html: contentDiv.innerHTML }} />
          </li>
        );
      })}
    </ul>
  );
};

export default App;
