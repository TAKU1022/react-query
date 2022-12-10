import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import NextLink from 'next/link';
import { Box, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';

export const Home: FC = () => {
  const { data, isLoading } = useQuery(['articles'], () =>
    axios
      .get(`${process.env.API_BASE_URL}/articles`)
      .then((response) => response.data)
  );

  return (
    <>
      <Heading textAlign={'center'} marginBottom={4}>
        Home
      </Heading>

      <Box marginBottom={6}>
        {!isLoading &&
          data.map((article: any) => (
            <Text key={article.title}>{article.title}</Text>
          ))}
      </Box>

      <UnorderedList>
        <ListItem>
          <NextLink href="/default_form">default form</NextLink>
        </ListItem>
      </UnorderedList>
    </>
  );
};
