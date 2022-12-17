import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormType } from '../../config/schema';
import { TextField } from '../TextField';

export const TitleField: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormType>();

  return (
    <TextField
      name={'title'}
      type={'text'}
      label={'タイトル'}
      isError={!!errors.title}
      errorMessage={errors.title?.message}
      register={register}
    />
  );
};
