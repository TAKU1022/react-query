import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormType } from '../../config/formSchema';
import { TextField } from '../TextField';

export const DescriptionField: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormType>();

  return (
    <TextField
      name={'description'}
      type={'text'}
      label={'詳細テキスト'}
      isError={!!errors.description}
      errorMessage={errors.description?.message}
      register={register}
    />
  );
};
