import { NextPage } from 'next';
import { AuthGuard } from '../components/AuthGuard';
import { DefaultLayout } from '../components/DefaultLayout';
import { Home } from '../components/Home';

const HomePage: NextPage = () => {
  return (
    <DefaultLayout>
      {/* <AuthGuard> */}
      <Home />
      {/* </AuthGuard> */}
    </DefaultLayout>
  );
};

export default HomePage;
