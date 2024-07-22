import React, { FC, ReactNode, createContext, useContext, useMemo } from 'react';
interface AppProps {
  children: ReactNode;
  block: HTMLElement;
}

const DemoFormContext = createContext({});

export const DemoFormContextProvider: FC<AppProps> = ({ block, children }) => {
  const dataElem = block.children[1].querySelector('div');
  const pTags = dataElem.querySelectorAll('p');
  const fields = [
    { name: pTags[1].textContent, type: 'text' },
    { name: pTags[2].textContent, type: 'text' },
    { name: pTags[3].textContent, type: 'button' },
  ];
  const viewLabel = pTags[3].textContent;
  // console.log('forms context', fields, dataElem);

  const contextValue = useMemo(() => ({ fields, viewLabel }), [fields]);

  return <DemoFormContext.Provider value={contextValue}>{children}</DemoFormContext.Provider>;
};

export const useDemoFormContext = () => {
  return useContext(DemoFormContext);
};
