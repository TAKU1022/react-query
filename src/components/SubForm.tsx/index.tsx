import { Button, Center, Heading, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema, FormType } from '../../config/formSchema';
import { TitleField } from '../TitleField';
import { DescriptionField } from '../DescriptionField';

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
        Form
      </Heading>

      <FormProvider {...formMethod}>
        <form noValidate={true} onSubmit={formMethod.handleSubmit(onSubmit)}>
          <VStack spacing={4}>
            <TitleField />
            <DescriptionField />
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
