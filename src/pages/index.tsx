import { NextPage } from 'next';
import { AuthGuard } from '../components/container/AuthGuard';
import { DefaultLayout } from '../components/ui/DefaultLayout';
import { Home } from '../components/ui/Home';

const HomePage: NextPage = () => {
  return (
    <DefaultLayout>
      <AuthGuard>
        <Home />
      </AuthGuard>
    </DefaultLayout>
  );
};

export default HomePage;
