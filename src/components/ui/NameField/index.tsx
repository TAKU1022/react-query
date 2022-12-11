import { FC, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormType } from '../../../types';
import { TextField } from '../TextField';

type Props = {
  name: keyof FormType;
};

export const NameField: FC<Props> = ({ name }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormType>();

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <TextField
      name={name}
      label={'氏名'}
      errorMessage={errors.name?.message}
      register={register}
    />
  );
};
