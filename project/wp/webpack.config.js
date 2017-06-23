var path = require('path');  // reuqire 在node中是请求路径或文件；加载 node.js 的 path 模块, 
var HtmlwebpackPlugin = require('html-webpack-plugin'); // 加载此插件，帮我们快速生成HTML
var Root_PATH = path.resolve(__dirname); // path.resolves([from...],to) 返回路径结果，from是从哪个路径，to是到哪个路径
var APP_PATH = path.resolve(Root_PATH,'app'); 
var BUILD_PATH = path.resolve(Root_PATH,'build');

const myroot = path.resolve('E:/svn/libDoctors/mobile/styles/my.js');
const myroot_style = path.resolve('E:/svn/libDoctors/mobile/styles');

// 配置 webpack 
module.exports = {
	// 项目入口，可以直接用文件夹名称，默认找 index.js，也可以确定哪个文件
	// entry: __dirname+'/app/index.js',
	entry: myroot,
	// 输出的文件名，合并打包后的 js 会命名为 bundle.js，能自动生成文件夹，无需手动操作
	output: {
		path: myroot_style, 
		filename: 'test.js'
	},
	/*
	*	自动刷新功能。
	*	webpack --watch 命令也可以，不过文件太多打包速度会慢，而且还要手动刷新浏览器
	*	可以在 package.json 里面的 scripts 配置运行命令，npm 支持自定义一些命令
	*/  
	devServer: {
		// contentBase: __dirname, //设定伺服的目录，不设定默认为当前目录
		historyApiFallback: true, // 所有指向跳向 index.html
		hot: true,	// 热更新，页面不再更新，通过 “webpackHotUpdate” 发送内容
		inline: true,  // 源文件改变时自动刷新
		// progress: true // 表示文件进度???
		port: 8080 // 端口，不设置默认8080
	},
	//  配置 loaders,里面的 loader 多个用 loaders
	module: {
		loaders: [
			{
				test: /\.css$/, // 通过正则表达式匹配要处理的文件
				loaders: ['style-loader', 'css-loader'],  // loaders 的处理顺序从右到左，即先运行 css-loader 再运行 style-loader
				include: APP_PATH	// 手动添加必须处理的目录 
				// exclude: APP_PATH   // 屏蔽不需处理的目录
			},
			{
				test: /\.scss$/,
				loaders: ['style-loader', 'css-loader', 'sass-loader'],  //编译 less ，要装 less，不然 less-loader 会报错
				include: APP_PATH
			}
		]
	},
	// 添加插件，会自动生成 html 文件
	plugins: [
		new HtmlwebpackPlugin({
			title: "Hello World app"
		})
	]
}