const HtmlWebPackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  output: {
    publicPath: "http://localhost:3000/",
  },
  resolve: {
    extensions: [".vue", ".js"],
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.svg$/,
        use: ["svg-url-loader"],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
