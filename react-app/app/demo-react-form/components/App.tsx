import React, { FC, useEffect, useState } from 'react';
import { getCall } from '../../../utils/baseUtils';
import useI18n from '../../../utils/hooks/useI18n';

interface AppProps {
  elem: HTMLElement;
}
// Define types for state
type FormState = {
  firstName: string;
  lastName: string;
};

const App: FC<AppProps> = ({ elem }) => {
  // Initialize state with types
  const [formState, setFormState] = useState<FormState>({
    firstName: '',
    lastName: '',
  });

  const [formFields, setFormFields] = useState([]);

  const { t } = useI18n();

  // console.log('ttttt =>', t('firstName'));

  useEffect(() => {
    getCall('/form.json').then(respData => {
      const formData = respData.data;
      if (formData.length) {
        setFormFields(formData);
      }
    });
  }, []);

  // Event handler for input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Event handler for form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can handle form submission logic here, such as sending data to a server
    console.log(`First Name: ${formState.firstName}, Last Name: ${formState.lastName}`);
    // Optionally clear the form inputs after submission
    setFormState({
      firstName: '',
      lastName: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {formFields.length > 0 &&
        formFields.map(field => (
          <>
            <label>
              {t(field.Name)}
              {field.Type === 'text' && <input type="text" name={field.Name} onChange={handleInputChange} required />}
            </label>
            <br />
          </>
        ))}
      <br />
      <button type="submit">{t('Submit')}</button>
    </form>
  );
};

export default App;
