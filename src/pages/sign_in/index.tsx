import { NextPage } from 'next';
import { GuestGuard } from '../../components/container/GuestGuard';
import { DefaultLayout } from '../../components/ui/DefaultLayout';
import { SignIn } from '../../components/ui/SignIn';

const SignInPage: NextPage = () => {
  return (
    <DefaultLayout>
      <GuestGuard>
        <SignIn />
      </GuestGuard>
    </DefaultLayout>
  );
};

export default SignInPage;
