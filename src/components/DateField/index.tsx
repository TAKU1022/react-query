import { Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormType } from '../../config/schema';
import { TextField } from '../TextField';

export const DateField: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormType>();

  return (
    <Flex gap={6} width={'100%'}>
      <TextField
        name={'startDate'}
        type={'datetime-local'}
        label={'開始日'}
        isError={!!errors.startDate}
        errorMessage={errors.startDate?.message}
        register={register}
      />
      <TextField
        name={'endDate'}
        type={'datetime-local'}
        label={'終了日'}
        isError={!!errors.startDate || !!errors.endDate}
        errorMessage={errors.endDate?.message}
        register={register}
      />
    </Flex>
  );
};
