import { Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormType } from '../../config/schema';
import { CheckBoxField } from '../CheckBoxField';

export const DraftField: FC = () => {
  const { register } = useFormContext<FormType>();

  return (
    <Flex justifyContent={'center'}>
      <CheckBoxField
        name={'isDraft'}
        label={'下書きとして保存'}
        register={register}
      />
    </Flex>
  );
};
