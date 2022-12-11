import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { TextField } from '../TextField';

type Props = {
  name: string;
};

export const NameField: FC<Props> = ({ name }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <TextField
      name={name}
      label={'氏名'}
      errorMessage={errors.name?.message}
      register={register}
    />
  );
};
