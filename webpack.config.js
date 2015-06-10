var webpack = require('webpack');

module.exports = {
  context:  __dirname,
  entry: { app: './index.js' },
  output: { path:  __dirname + '/dist', filename: 'bundle.js' },

  plugins: [
    // new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],

  resolve: {
    modulesDirectories: [ "node_modules", "bower_components", "app"]
  },

  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
      {test: /\.css$/, loader: 'style!css', exclude: /node_modules/} 
    ]
  }
};

