const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {

    rules: [

      {

        test: /\.css$/i,

        use: ['style-loader', 'css-loader'],

      },
      {

        test: /\.(png|svg|jpg|jpeg|gif)$/i,

        type: 'asset/resource',

      },
      {

        test: /\.(woff|woff2|eot|ttf|otf)$/i,

        type: 'asset/resource',

      },
      {

        test: /\.(csv|tsv)$/i,

        use: ['csv-loader'],

      },

      {

        test: /\.xml$/i,

        use: ['xml-loader'],

      },
      

    ],  

  },
  devServer: {

    static: './dist',

  },
  plugins: [
    new HtmlWebpackPlugin({
    template: './src/index.html'
    }),
  ],
  optimization: {

    runtimeChunk: 'single',

  },
  
};

