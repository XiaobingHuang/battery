import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import { QueryClient } from "react-query";
import { graphQLBasePath } from "./configs";

export const gQueryClient = new ApolloClient({
  uri:  "/ui/graphqlui",
  // uri: process.env.MOCK_GRAPH_API || graphQLBasePath,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
      nextFetchPolicy: "cache-and-network",
    },
  },
});

export const rQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default gQueryClient;
