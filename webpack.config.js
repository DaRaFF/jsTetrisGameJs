const path = require('path')

module.exports = {
  mode: 'development',
  entry: './js/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
    module: {
      rules: [
        // {
        //   test: /\.css$/,
        //   use: [
        //     'style-loader',
        //     'css-loader'
        //   ],
        // },
       {
         test: /\.(png|jpe?g|gif)$/i,
         use: [
           'file-loader',
         ],
       },
      ],
    },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
}