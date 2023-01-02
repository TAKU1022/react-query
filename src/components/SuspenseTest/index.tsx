import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';
import { UserType } from '../../types';

type Props = {
  userList?: UserType[];
};

export const SuspenseTest: FC<Props> = ({ userList }) => {
  if (!userList) return null;

  return (
    <>
      <Heading textAlign={'center'} marginBottom={4}>
        Suspense
      </Heading>

      <Box marginBottom={10}>
        {userList.map((user: UserType) => (
          <Box key={user.id} width={'max-content'} marginX={'auto'}>
            <Text>氏名：{user.name}</Text>
            <Text>年齢：{user.age}</Text>
          </Box>
        ))}
      </Box>

      <Flex justifyContent={'center'}>
        <Link as={NextLink} href={'/'}>
          戻る
        </Link>
      </Flex>
    </>
  );
};
