import { NextPage } from 'next';
import { AuthGuard } from '../../components/AuthGuard';
import { DefaultForm } from '../../components/DefaultForm.tsx';
import { DefaultLayout } from '../../components/DefaultLayout';

const DefaultFormPage: NextPage = () => {
  return (
    <DefaultLayout>
      <AuthGuard>
        <DefaultForm />
      </AuthGuard>
    </DefaultLayout>
  );
};

export default DefaultFormPage;
