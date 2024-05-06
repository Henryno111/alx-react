const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './dist/main.js',
    output: {
        filename: 'bundle.js',
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
            template: './src/index.html', // Path to your HTML template file
            filename: 'index.html', // Output HTML file name
        }),
    ],
};

