const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Webpack related folders
const paths = {
	DIST: path.resolve(__dirname, 'dist'),
	SRC: path.resolve(__dirname, 'src')
};

module.exports = {
	entry: path.join(paths.SRC, 'app.js'),
	output: {
		path: paths.DIST,
		filename: 'app.bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(paths.SRC, 'index.html')
		})
	],
	devServer: {
		contentBase: paths.SRC
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devtool: 'source-map'
};
