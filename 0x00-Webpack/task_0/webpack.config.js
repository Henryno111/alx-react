const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [],
    },
    resolve: {
        alias: {
            jquery: 'jquery/dist/jquery.slim.js', // Use the slim version of jQuery to reduce file size
        },
    },
    plugins: [
        // Add HtmlWebpackPlugin to generate HTML files
        new HtmlWebpackPlugin({
            template: './dist/index.html', // Path to your HTML template file
            filename: 'index.html', // Output HTML file name
        }),
    ],
};

