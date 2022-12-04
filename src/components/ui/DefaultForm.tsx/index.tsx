import { FC } from 'react';
import { Form } from 'react-final-form';
import { FormValue } from '../../../types';
import { TextInput } from '../TextInput.tsx';

export const DefaultForm: FC = () => {
  const onSubmit = (formValue: FormValue) => {
    console.log(formValue);
  };

  return (
    <div>
      <h1>Form</h1>
      <Form onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <TextInput name="userName" />
            <TextInput name="title" />
            <button>Submit</button>
          </form>
        )}
      </Form>
    </div>
  );
};
