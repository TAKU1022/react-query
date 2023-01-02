import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import NextLink from 'next/link';
import { Box, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { DummyApiType } from '../../config/schema';

export const Home: FC = () => {
  const { data, isLoading } = useQuery<DummyApiType>(['articles'], () =>
    axios
      .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/articles`)
      .then((response) => response.data)
  );

  return (
    <>
      <Heading textAlign={'center'} marginBottom={4}>
        Home
      </Heading>

      <Box marginBottom={6}>
        {data &&
          !isLoading &&
          data.map((article) => <Text key={article.text}>{article.text}</Text>)}
      </Box>

      <UnorderedList>
        <ListItem>
          <NextLink href="/default_form">default form</NextLink>
        </ListItem>
        <ListItem>
          <NextLink href="/sub_form">sub form</NextLink>
        </ListItem>
      </UnorderedList>
    </>
  );
};
