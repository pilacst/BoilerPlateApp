const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    module: {
        rules: [{
          loader: 'babel-loader',
          test:/\.(js|jsx)$/,
          exclude: /node_modules/
        },
        {
            test: /\.(css)$/,
            use: ['style-loader','css-loader']
        },
        {
            test: /\.(scss)$/i,
            use: [
              // Creates `style` nodes from JS strings
              //"style-loader",
              // Translates CSS into CommonJS
              //"css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          }]
    },
};