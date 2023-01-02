import axios from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import { AuthGuard } from '../../components/AuthGuard';
import { DefaultLayout } from '../../components/DefaultLayout';
import { SuspenseTest } from '../../components/SuspenseTest';
import { UserType } from '../../types';

type Props = {
  userList: UserType[];
};

const SuspensePage: NextPage<Props> = ({ userList }) => {
  return (
    <DefaultLayout>
      {/* <AuthGuard> */}
      <SuspenseTest userList={userList} />
      {/* </AuthGuard> */}
    </DefaultLayout>
  );
};

export default SuspensePage;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get<UserType[]>(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/users`
  );

  const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

  await sleep(5000);

  return {
    props: {
      userList: data,
    },
  };
};
