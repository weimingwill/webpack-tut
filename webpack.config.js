const path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
 	entry: './src/app.js',

 	output: {
    	path: path.resolve(__dirname, 'dist'),
    	filename: 'app.bundle.js'
 	},
	module: {
		rules: [
			// it is readed from the end, read sass-loarder first.
			{
			    test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: ['css-loader', 'sass-loader'],
                    publicPath: '/dist'}
                )
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Test',
			// minify: {
			// 	collapseWhitespace: true
			// },
			hash: true,
			template: './src/index.ejs'
		}),
		new ExtractTextPlugin({
			filename: "app.css",
			disable: false,
			allChunks: true
		})
	]
};