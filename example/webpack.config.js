var webpack = require('webpack');

module.exports = {
  context:  __dirname,
  entry: { app: './index.js' },
  output: { path:  __dirname + '/dist', filename: 'bundle.js' },

  plugins: [
    // new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],

  resolve: {
    modulesDirectories: ["node_modules"]
  },

  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel'},
      {test: /\.less$/, loader: 'style!css!less'} 
    ]
  }
};

