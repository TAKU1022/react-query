import { Button, Center, Heading, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FormType } from '../../../types';
import { NameField } from '../NameField';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from '../../../config/formSchema';
import { AgeField } from '../AgeField';

export const SubForm: FC = () => {
  const formMethod = useForm<FormType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (formValue: FormType) => {
    console.log(formValue);
  };

  return (
    <>
      <Heading textAlign={'center'} marginBottom={4}>
        Sub Form
      </Heading>

      <FormProvider {...formMethod}>
        <form onSubmit={formMethod.handleSubmit(onSubmit)}>
          <VStack spacing={4}>
            <NameField />
            <AgeField />
          </VStack>

          <Center paddingTop={8}>
            <Button type="submit" colorScheme={'teal'}>
              送信
            </Button>
          </Center>
        </form>
      </FormProvider>
    </>
  );
};
