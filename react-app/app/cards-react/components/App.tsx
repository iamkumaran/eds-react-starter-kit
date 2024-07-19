import React, { FC } from 'react';

interface AppProps {
  block: HTMLElement;
  data: {
    content: string | TrustedHTML;
    images: string | TrustedHTML;
  }[];
}

const App: FC<AppProps> = ({ block, data }) => {
  return (
    <ul>
      {data.map(item => (
        <li>
          <div className="cards-card-image" dangerouslySetInnerHTML={{ __html: item.images }} />
          <div className="cards-card-body" dangerouslySetInnerHTML={{ __html: item.content }} />
        </li>
      ))}
    </ul>
  );
};

export default App;
