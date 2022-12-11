import { Button, Center, Heading, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { NameField } from '../NameField';

export const SubForm: FC = () => {
  const formMethod = useForm();

  const onSubmit = (formValue: any) => {
    console.log(formValue);
  };

  return (
    <>
      <Heading textAlign={'center'} marginBottom={4}>
        Sub Form
      </Heading>

      <FormProvider {...formMethod}>
        <form onSubmit={formMethod.handleSubmit(onSubmit)}>
          <VStack>
            <NameField name={'name'} />
          </VStack>

          <Center paddingTop={4}>
            <Button type="submit" colorScheme={'teal'}>
              送信
            </Button>
          </Center>
        </form>
      </FormProvider>
    </>
  );
};
