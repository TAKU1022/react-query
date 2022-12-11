import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { FC, useEffect } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormType } from '../../../types';

type Props = {
  name: keyof FormType;
  label: string;
  helperText?: string;
  errorMessage?: string;
  register: UseFormRegister<FormType>;
};

export const TextField: FC<Props> = ({
  name,
  label,
  helperText,
  errorMessage,
  register,
}) => {
  useEffect(() => {
    console.log(errorMessage);
  }, [errorMessage]);

  return (
    <FormControl isInvalid={!!errorMessage}>
      <FormLabel>{label}</FormLabel>
      <Input type={'text'} {...register(name)} />
      {!errorMessage ? (
        <>{helperText && <FormHelperText>{helperText}</FormHelperText>}</>
      ) : (
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      )}
    </FormControl>
  );
};
