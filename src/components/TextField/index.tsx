import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormType } from '../../config/schema';

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
      <Input
        {...register(name)}
        type={type}
        focusBorderColor={isError ? '#E53E3E' : undefined}
      />
      {!isError ? (
        <>{helperText && <FormHelperText>{helperText}</FormHelperText>}</>
      ) : (
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      )}
    </FormControl>
  );
};
