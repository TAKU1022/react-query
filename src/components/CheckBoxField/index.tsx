import { Checkbox, FormLabel, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormType } from '../../config/formSchema';

type Props = {
  name: keyof FormType;
  label: string;
  value?: string;
  isError?: boolean;
  register: UseFormRegister<FormType>;
};

export const CheckBoxField: FC<Props> = ({
  name,
  label,
  value,
  isError,
  register,
}) => {
  return (
    <FormLabel
      display={'flex'}
      alignItems={'center'}
      gap={2}
      width={'max-content'}
      cursor={'pointer'}
    >
      <Checkbox
        {...register(name)}
        value={value}
        isInvalid={isError}
        colorScheme={'teal'}
      />
      <Text color={isError ? '#E53E3E' : undefined}>{label}</Text>
    </FormLabel>
  );
};
