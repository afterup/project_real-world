module.exports = {
  entry: "./test.js",
  output: {
    path: __dirname,
    filename: "test-bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
};
