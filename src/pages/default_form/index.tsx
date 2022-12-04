import { NextPage } from 'next';
import { AuthGuard } from '../../components/container/AuthGuard';
import { DefaultForm } from '../../components/ui/DefaultForm.tsx';
import { DefaultLayout } from '../../components/ui/DefaultLayout';

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
