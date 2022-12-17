import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormType } from '../../config/formSchema';

type Props = {
  name: keyof FormType;
  type: string;
  label: string;
  isError?: boolean;
  helperText?: string;
  errorMessage?: string;
  register: UseFormRegister<FormType>;
};

export const TextField: FC<Props> = ({
  name,
  type,
  label,
  isError,
  helperText,
  errorMessage,
  register,
}) => {
  return (
    <FormControl isInvalid={isError}>
      <FormLabel fontWeight={'bold'} color={isError ? '#E53E3E' : undefined}>
        {label}
      </FormLabel>
      <Input type={type} {...register(name)} />
      {!isError ? (
        <>{helperText && <FormHelperText>{helperText}</FormHelperText>}</>
      ) : (
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      )}
    </FormControl>
  );
};
