import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormType } from '../../config/schema';
import { SelectField } from '../SelectField';

export const FruitField: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormType>();

  const itemList = [
    { label: 'リンゴ', value: 'apple' },
    { label: 'バナナ', value: 'banana' },
    { label: 'ブドウ', value: 'grape' },
    { label: 'オレンジ', value: 'orange' },
  ];

  return (
    <SelectField
      name={'fruit'}
      label={'果物'}
      itemList={itemList}
      isError={!!errors.fruit}
      errorMessage={errors.fruit?.message}
      register={register}
    />
  );
};
