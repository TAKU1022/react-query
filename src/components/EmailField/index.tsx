import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormType } from '../../config/schema';
import { TextField } from '../TextField';

export const EmailField: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormType>();

  return (
    <TextField
      name={'email'}
      type={'email'}
      label={'メールアドレス'}
      isError={!!errors.email}
      errorMessage={errors.email?.message}
      register={register}
    />
  );
};
