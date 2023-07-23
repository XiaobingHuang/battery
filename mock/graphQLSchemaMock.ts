const { generate } = require("@graphql-codegen/cli");

const generateSchema = async () => {
  await generate(
    {
      schema: "http://qa-app.arctrade.local/ui/graphql",
      headers: {
        // Add Headers if needed
        Authorization: "Bearer 2b1feefb-4778-43ba-b0f0-0b8cd9f5dd66",
      },
      generates: {
        [`${process.cwd()}/schema.graphql`]: {
          plugins: ["schema-ast"],
          config: {
            includeDirectives: true,
            federation: true,
          },
        },
      },
    },
    true
  );
};

generateSchema();
