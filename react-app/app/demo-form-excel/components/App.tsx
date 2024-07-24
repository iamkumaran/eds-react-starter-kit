import React, { FC, useEffect, useState } from 'react';
import { getCall } from '../../../utils/baseUtils';
import useI18n from '../../../utils/hooks/useI18n';
import Text from '../../../library/Form/Text/Text';
import Checkbox from '../../../library/Form/Checkbox/Checkbox';
import Radio from '../../../library/Form/Radio/Radio';

// Define types for state
type FormState = {
  firstName: string;
  lastName: string;
};

const App: FC = () => {
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
      const groupData = Object.groupBy(respData.data, ({ Name }) => Name);

      const formData = Object.values(groupData);
      // const

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
        formFields.map(fieldGroup =>
          fieldGroup.length === 1 ? (
            fieldGroup.map((field: { Name: string; Type: string; Label: string; Placeholder: string }) => (
              <>
                {field.Type === 'text' && (
                  <Text
                    label={t(field.Label)}
                    name={field.Name}
                    placeholder={field.Placeholder}
                    handler={handleInputChange}
                  />
                )}
              </>
            ))
          ) : (
            <>
              <fieldset>
                <legend>{fieldGroup[0].Label}</legend>
                {fieldGroup.map((field: { Name: string; Type: string; Label: string; Placeholder: string }) => (
                  <>
                    {field.Type === 'check' && (
                      <Checkbox label={t(field.Label)} name={field.Name} handler={handleInputChange} />
                    )}
                    {field.Type === 'radio' && (
                      <Radio label={t(field.Label)} name={field.Name} handler={handleInputChange} />
                    )}
                  </>
                ))}
              </fieldset>
            </>
          )
        )}
      <br />
      <button type="submit">{t('Submit')}</button>
    </form>
  );
};

export default App;
