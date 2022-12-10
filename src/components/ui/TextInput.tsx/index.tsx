import { Input } from '@chakra-ui/react';
import { FC } from 'react';
import { Field } from 'react-final-form';

type Props = {
  name: string;
};

export const TextInput: FC<Props> = ({ name }) => {
  return (
    <Field name={name}>
      {(fieldProps) => (
        <Input
          name={fieldProps.input.name}
          value={fieldProps.input.value}
          onChange={fieldProps.input.onChange}
        />
      )}
    </Field>
  );
};
