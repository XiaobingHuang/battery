const { ApolloServer, gql } = require("apollo-server");
const { loadSchema } = require("@graphql-tools/load");
const { GraphQLFileLoader } = require("@graphql-tools/graphql-file-loader");
const path = require("path");
// @ts-ignore
const { mocks } = require("src/mock/mocks.ts");
async function main() {
  const schema = await loadSchema("./src/mock/schema.graphql", {
    loaders: [new GraphQLFileLoader()],
  });

  const server = new ApolloServer({
    schema: schema,
    mocks,
    mockEntireSchema: false,
  });

  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
}

main();
