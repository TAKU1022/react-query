import { Button, Center, Heading, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { Form } from 'react-final-form';
import { FormValue } from '../../../types';
import { TextInput } from '../TextInput.tsx';

export const DefaultForm: FC = () => {
  const onSubmit = (formValue: FormValue) => {
    console.log(formValue);
  };

  return (
    <>
      <Heading textAlign={'center'} marginBottom={4}>
        Default Form
      </Heading>
      <Form onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <VStack>
              <TextInput name="userName" />
              <TextInput name="title" />
            </VStack>
            <Center paddingTop={4}>
              <Button type={'submit'} colorScheme={'teal'}>
                Submit
              </Button>
            </Center>
          </form>
        )}
      </Form>
    </>
  );
};
