module.exports = {
  entry: __dirname + '/src/scripts/app.js',
  output: {
    path: __dirname + '/dist/scripts',
    filename: 'dbp-bundle.min.js'
  },
  devtool: "#source-map",
  module: {
    loaders: [
      { test: /\.html$/, loader: "html"},
      { test: /\.json$/, loader: "json"}
    ]
  }
}
