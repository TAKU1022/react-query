import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Textarea,
} from '@chakra-ui/react';
import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormType } from '../../config/schema';

type Props = {
  name: keyof FormType;
  label: string;
  isError?: boolean;
  helperText?: string;
  errorMessage?: string;
  register: UseFormRegister<FormType>;
};

export const TextAreaField: FC<Props> = ({
  name,
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
      <Textarea
        {...register(name)}
        focusBorderColor={isError ? '#E53E3E' : undefined}
        resize={'none'}
      />
      {!isError ? (
        <>{helperText && <FormHelperText>{helperText}</FormHelperText>}</>
      ) : (
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      )}
    </FormControl>
  );
};
