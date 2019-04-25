const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, "dist"),
		filename: "app.bundle.js"
	},
	module: {
		rules: [
			// Automatically JavaScript with webpack using babel-loader
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/
			},
			// Automatically Import CSS in JavaScript with webpack using style-loader and css-loader
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html"
		})
	]
};
