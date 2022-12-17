import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Select,
} from '@chakra-ui/react';
import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormType } from '../../config/schema';

type Props = {
  name: keyof FormType;
  label: string;
  itemList: { label: string; value: string }[];
  isError?: boolean;
  helperText?: string;
  errorMessage?: string;
  register: UseFormRegister<FormType>;
};

export const SelectField: FC<Props> = ({
  name,
  label,
  itemList,
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
      <Select
        {...register(name)}
        placeholder={'選択してください'}
        focusBorderColor={isError ? '#E53E3E' : undefined}
      >
        {itemList.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </Select>
      {!isError ? (
        <>{helperText && <FormHelperText>{helperText}</FormHelperText>}</>
      ) : (
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      )}
    </FormControl>
  );
};
