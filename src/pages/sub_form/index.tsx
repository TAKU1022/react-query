import { NextPage } from 'next';
import { AuthGuard } from '../../components/container/AuthGuard';
import { SubForm } from '../../components/ui/SubForm.tsx';
import { DefaultLayout } from '../../components/ui/DefaultLayout';

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
