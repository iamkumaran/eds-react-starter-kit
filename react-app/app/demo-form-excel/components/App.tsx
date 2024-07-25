import React, { FC, Fragment, lazy, Suspense, useEffect, useState } from 'react';
import { getCall } from '../../../utils/baseUtils';
import useI18n from '../../../utils/hooks/useI18n';
import Text from '../../../library/Form/Text/Text';
import Checkbox from '../../../library/Form/Checkbox/Checkbox';
import Radio from '../../../library/Form/Radio/Radio';
// import TextArea from '../../../library/Form/TextArea/TextArea';
const TextArea = lazy(() => import(/* webpackChunkName: "TextAreaChunk" */ '../../../library/Form/TextArea/TextArea'));

// Define types for state
type FormState = {
  firstName: string;
  lastName: string;
};

interface FieldMap {
  Name: string;
  Type: string;
  Label: string;
  Placeholder: string;
}

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
            fieldGroup.map((field: FieldMap) => (
              <>
                {field.Type === 'text' && (
                  <Text
                    label={t(field.Label)}
                    name={field.Name}
                    placeholder={field.Placeholder}
                    handler={handleInputChange}
                  />
                )}
                {field.Type === 'textarea' && (
                  <Suspense fallback={<p>Loading...</p>}>
                    <TextArea
                      label={t(field.Label)}
                      name={field.Name}
                      placeholder={field.Placeholder}
                      handler={handleInputChange}
                    />
                  </Suspense>
                )}
              </>
            ))
          ) : (
            <>
              <fieldset>
                <legend>{fieldGroup[0].Label}</legend>
                {fieldGroup[0].Name !== 'select' &&
                  fieldGroup.map((field: FieldMap) => (
                    <>
                      {field.Type === 'check' && (
                        <Checkbox label={t(field.Label)} name={field.Name} handler={handleInputChange} />
                      )}
                      {field.Type === 'radio' && (
                        <Radio label={t(field.Label)} name={field.Name} handler={handleInputChange} />
                      )}
                    </>
                  ))}
                {fieldGroup[0].Type === 'select' && (
                  <select>
                    {fieldGroup.map((field: FieldMap, index: Number) => (
                      <Fragment key={field.Label + field.Name}>
                        {index !== 0 && <option value={field.Name}>{field.Label}</option>}
                      </Fragment>
                    ))}
                  </select>
                )}
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
