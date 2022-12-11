import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { FC } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

type Props = {
  name: string;
  label: string;
  helperText?: string;
  errorMessage?: string;
  register: UseFormRegister<FieldValues>;
};

export const TextField: FC<Props> = ({
  name,
  label,
  helperText,
  errorMessage,
  register,
}) => {
  return (
    <FormControl>
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
