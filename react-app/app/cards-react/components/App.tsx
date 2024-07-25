import React, { FC, lazy, Suspense } from 'react';
import { createOptimizedPicture } from '../../../../scripts/aem';
interface AppProps {
  content: { texts: string; images: string }[];
}

const App: FC<AppProps> = ({ content }) => (
  <ul>
    {content.map(item => (
      <li>
        <div className="cards-card-image">
          <picture dangerouslySetInnerHTML={{ __html: item.images }} />
        </div>
        <div className="cards-card-body" dangerouslySetInnerHTML={{ __html: item.texts }} />
      </li>
    ))}
  </ul>
);

export default App;
