import { Button, Center, Heading, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema, FormType } from '../../config/schema';
import { TitleField } from '../TitleField';
import { DescriptionField } from '../DescriptionField';
import { DraftField } from '../DraftField';
import { SportListField } from '../SportListField';
import { FruitField } from '../FruitField';
import { EmailField } from '../EmailField';
import { DateField } from '../DateField';
import { fetchArticles } from '../../api';

export const SubForm: FC = () => {
  const formMethod = useForm<FormType>({
    defaultValues: { sportList: [] },
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
        <form
          noValidate={true}
          autoComplete={'off'}
          onSubmit={formMethod.handleSubmit(onSubmit)}
        >
          <VStack spacing={4}>
            <TitleField />
            <DescriptionField />
            <SportListField />
            <FruitField />
            <EmailField />
            <DateField />
            <DraftField />
          </VStack>

          <Center paddingTop={8}>
            <Button type="submit" colorScheme={'teal'}>
              送信
            </Button>
          </Center>
        </form>
      </FormProvider>

      <Center marginTop={8}>
        <Button type="button" colorScheme={'teal'} onClick={fetchArticles}>
          Fetch Articles
        </Button>
      </Center>
    </>
  );
};
