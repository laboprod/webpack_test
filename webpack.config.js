let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');

module.exports = {
	entry: path.resolve(__dirname, './src/index.js'),
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js',
	},
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
			{
				test: /\.html$/i,
				loader: 'html-loader',
				options: {
					minimize: true,
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './src/index.html'),
			filename: 'index.html',
		}),
	],
};
