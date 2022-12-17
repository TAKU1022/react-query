import { NextPage } from 'next';
import { AuthGuard } from '../../components/AuthGuard';
import { DefaultLayout } from '../../components/DefaultLayout';
import { SubForm } from '../../components/SubForm.tsx';

const SubFormPage: NextPage = () => {
  return (
    <DefaultLayout>
      <AuthGuard>
        <SubForm />
      </AuthGuard>
    </DefaultLayout>
  );
};

export default SubFormPage;
