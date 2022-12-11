import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormType } from '../../../types';
import { TextField } from '../TextField';

export const AgeField: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormType>();

  return (
    <TextField
      name={'age'}
      type={'number'}
      label={'年齢'}
      isError={!!errors.age}
      helperText={'18-60'}
      errorMessage={errors.age?.message}
      register={register}
    />
  );
};
