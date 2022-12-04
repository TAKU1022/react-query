import { FC } from 'react';
import { Field } from 'react-final-form';

type Props = {
  name: string;
};

export const TextInput: FC<Props> = ({ name }) => {
  return <Field name={name} component="input" type="text" />;
};
