import React, { FC, SyntheticEvent, useState } from 'react';
import { useDemoFormContext } from '../context/DemoFormContext';
import ViewList from './ViewList';
import { FieldType, FormContext } from './types';

const App: FC = () => {
  const { fields } = useDemoFormContext() as FormContext;
  const [savedData, setSavedData] = useState([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const arr = [`${formData.get('First-Name')} ${formData.get('Last-Name')}`];

    // update the states
    setSavedData(prevState => [...prevState, ...arr]);

    // clear the fields
    e.currentTarget.reset();
    e.currentTarget.querySelector('input').focus();
  };

  if (!fields.length) {
    return null;
  }
  return (
    <form onSubmit={handleSubmit}>
      {fields.length > 0 &&
        fields.map((field: FieldType) => (
          <>
            <div key={`demo-form-${field.name}`} className="form-item">
              {field.type === 'text' && (
                <label>
                  <span className="label">{field.name}</span>
                  <input type="text" name={field.name.replace(' ', '-')} required />
                </label>
              )}
            </div>
            {field.type === 'button' && (
              <div className="button-panel">
                <button type="submit">{field.name}</button>
              </div>
            )}
          </>
        ))}
      <ViewList data={savedData} />
    </form>
  );
};

export default App;
