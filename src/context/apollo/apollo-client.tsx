import { ApolloClient, InMemoryCache } from '@apollo/client';

const TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
const SPACE = process.env.CONTENTFUL_SPACE_ID;
const URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE}`;

const apolloClient = new ApolloClient({
    uri: URL,
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    },
    cache: new InMemoryCache(),
});

export default apolloClient;