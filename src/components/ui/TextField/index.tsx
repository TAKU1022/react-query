import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormType } from '../../../types';

type Props = {
  name: keyof FormType;
  type: string;
  label: string;
  helperText?: string;
  errorMessage?: string;
  register: UseFormRegister<FormType>;
};

export const TextField: FC<Props> = ({
  name,
  type,
  label,
  helperText,
  errorMessage,
  register,
}) => {
  return (
    <FormControl isInvalid={!!errorMessage}>
      <FormLabel fontWeight={'bold'} color={errorMessage && '#E53E3E'}>
        {label}
      </FormLabel>
      <Input type={type} {...register(name)} />
      {!errorMessage ? (
        <>{helperText && <FormHelperText>{helperText}</FormHelperText>}</>
      ) : (
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      )}
    </FormControl>
  );
};
