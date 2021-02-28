const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/scripts/script.js",
  output: {
    filename: "main.js",
  },
  mode: "production",
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.(eot|ttf|woff|svg)$/i,
        use: ["file-loader"],
      },
      {
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            },
          },
          "css-loader",
        ],
        test: /\.css$/,
      },
    ],
  },
};
