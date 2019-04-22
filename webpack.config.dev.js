const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.base");

module.exports = merge(baseConfig, {
	mode: "development",
	devServer: {
		port: 9000
	},
	// devtool - this generates Source Maps through webpack for a Better Debugging Experience with source-map
	devtool: "source-map"
});
