const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { mergeWithRules } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const getCSSModuleLocalIdent = require("react-dev-utils/getCSSModuleLocalIdent");
require("dotenv").config();

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;
const fileRegex = /\.(pdf|csv|gif|png|jpe?g|svg)$/;

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "arctrade-retail",
    projectName: "bess",
    webpackConfigEnv,
    argv,
  });

  return mergeWithRules({
    module: {
      rules: {
        test: "match",
        use: "replace",
      },
    },
  })(defaultConfig, {
    output: {
      filename: 'arctrade-retail-bess.[chunkhash].js',
      chunkFilename: '[name].[chunkhash].arctrade-retail-bess.js',
      path: path.resolve(process.cwd(), 'dist'),
    },
    infrastructureLogging: {
      debug: [name => name.includes('webpack-dev-server')],
    },
    module: {

      rules: [
        {
          test: fileRegex,
          use: {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
        },
        {
          test: sassRegex,
          exclude: sassModuleRegex,
          include: [/src/],
          use: [
            require.resolve("style-loader", {
              paths: [require.resolve("webpack-config-single-spa")],
            }),
            require.resolve("css-loader", {
              paths: [require.resolve("webpack-config-single-spa")],
            }),
            "sass-loader",
          ],
        },
        {
          test: sassModuleRegex,
          include: [/src/],
          use: [
            require.resolve("style-loader", {
              paths: [require.resolve("webpack-config-single-spa")],
            }),
            {
              loader: require.resolve("css-loader", {
                paths: [require.resolve("webpack-config-single-spa")],
              }),
              options: {
                modules: {
                  // Generate semantic class name
                  getLocalIdent: getCSSModuleLocalIdent,
                },
              },
            },
            "sass-loader",
          ],
        },
      ],
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    optimization: {
      sideEffects: false,
    },
    devServer: {
      static: process.env.REQUEST_MOCk
          ? {
            directory: path.join(__dirname, 'src/features/api/mock'),
            publicPath: '/uiserver',
          }
          : {},
      proxy: {
        "/ui/graphqlui": {
          target:  process.env.MOCK_GRAPH_API,
          logLevel: 'debug',
          secure: false,
          changeOrigin: true,
        },
        "/uiserver": {
          target: process.env.API_PROXY,
          secure: false,
          logLevel: 'debug',
          changeOrigin: true,
        },
      },
    },
    plugins: [
      new CleanWebpackPlugin(),
      new webpack.EnvironmentPlugin({
        LEGACY_URL: process.env.LEGACY_URL || "",
        API_HOST: process.env.API_HOST || "",
        REQUEST_MOCk: process.env.REQUEST_MOCk || false,
        API_PROXY: process.env.API_PROXY || null,
        MOCK_GRAPH_API: process.env.MOCK_GRAPH_API || null,
        API_PROXY_LEGACY: process.env.API_PROXY_LEGACY || null,
        MIXPANEL_SECRET: "38b579e15e71584a2986751e257b7b8e",
        STRIPE_KEY:"pk_test_51Ig6hOAd696ouCLpxTIgkmcSdfhLr7yl2ZMpf44JSpyP3BeN9ROmuwKdTQ5bnVTwuzQJb6rBxfQfNY17Cmk8D9nc00jwJxIiAp"
      }),
    ],
  });
};
