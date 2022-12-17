import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormType } from '../../config/schema';
import { TextAreaField } from '../TextAreaField';

export const DescriptionField: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormType>();

  return (
    <TextAreaField
      name={'description'}
      label={'詳細テキスト'}
      isError={!!errors.description}
      errorMessage={errors.description?.message}
      register={register}
    />
  );
};
