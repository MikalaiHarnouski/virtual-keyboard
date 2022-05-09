const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/js/index.js'),
    },
	output: {
        path: path.resolve(__dirname, './output'),
        filename: '[name].bundle.js',
    },
	plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/template.html'),
            filename: 'index.html',
        }),
    ],
	
	module: {
	   rules: [
		  {
			 test: /\.js$/,
			 loader: 'babel-loader',
		  },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },		  
	   ]
	}
}