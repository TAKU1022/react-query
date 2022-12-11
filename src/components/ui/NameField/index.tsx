import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormType } from '../../../types';
import { TextField } from '../TextField';

export const NameField: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormType>();

  return (
    <TextField
      name={'name'}
      type={'text'}
      label={'氏名'}
      isError={!!errors.name}
      errorMessage={errors.name?.message}
      register={register}
    />
  );
};
