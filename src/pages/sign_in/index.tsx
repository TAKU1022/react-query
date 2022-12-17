import { NextPage } from 'next';
import { DefaultLayout } from '../../components/DefaultLayout';
import { GuestGuard } from '../../components/GuestGuard';
import { SignIn } from '../../components/SignIn';

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
