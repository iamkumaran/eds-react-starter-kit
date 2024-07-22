import React, { FC } from 'react';
import { useDemoFormContext } from '../context/DemoFormContext';
import { FormContext, ViewListProps } from './types';

const ViewList: FC<ViewListProps> = ({ data }) => {
  const { viewLabel } = useDemoFormContext() as FormContext;
  return (
    <>
      {data.length > 0 && (
        <>
          <h3>{viewLabel}</h3>
          <ul>
            {data.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default ViewList;
