const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");
const CopyPlugin = require("copy-webpack-plugin");
function buildEntry(dirname) {
  const lookupDir = path.join(__dirname, dirname);
  const o = fs.readdirSync(lookupDir).reduce((entries, dir) => {
    const fullDir = path.join(lookupDir, dir);
    const entry = path.join(fullDir, "app.ts");
    if (fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)) {
      entries[`${dirname}/${dir}`] = ["webpack-hot-middleware/client", entry];
    }

    return entries;
  }, {});
  debugger;
  return o;
}
module.exports = {
  mode: "development",
  devtool: "source-map", // 设置为'source-map'以启用精确的sourcemap
  entry: {
    ...buildEntry("composition"),
  },

  output: {
    path: path.join(__dirname, "__build__"),
    filename: "[name].js",
    chunkFilename: "[id].chunk.js",
    publicPath: "/__build__/",
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.vue$/, use: ["vue-loader"] },
      { test: /\.css$/, use: ["vue-style-loader", "css-loader"] },
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: "shared",
          filename: "shared.js",
          chunks: "initial",
        },
      },
    },
  },

  plugins: [
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(true),
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "static/config.json"),
          to: path.resolve(__dirname, "static"),
        },
      ],
    }),
  ],
};
