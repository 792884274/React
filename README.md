**用法**
```
git clone 地址
npm install
webpack --watch

```
在服务器中打开，或者在WebStorm(配置服务器)中打开。

**一、创建项目并初始化**
```
$ mkdir React               Linux mkdir创建目录React
$ cd React                  打开React文件夹
$ npm init                  npm初始化项目
$ touch webpack.config.js   touch创建webpack.config.js配置文件

```
npm init初始化生成package.json文件，定义项目所需要的各种模块，以及项目的配置信息(名称、版本等)。
>npm install 根据这个配置文件，自动下载所需模块，也就是配置项目所需的运行和开发环境。

```
package.json

{
  "name": "test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}

```
**二、npm安装项目所需的依赖包**

webpack相关包
```
$ npm install webpack webpack-dev-server html-webpack-plugin --save-dev
```
css\less样式文件
```
$ npm install css-loader style-loader less-loader less --save-dev
```
babel\react\es6支持包
```
$ npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev
$ npm install react react-dom react-router react-mixin react-responsive --save
```
>--save-dev (devDependencies)是你开发时候依赖的模块，--save (dependencies) 是你发布之后还依赖的模块。

**三、创建工程结构目录**
```
React
    -|src
        --|css (样式文件)
        --|images (图片文件)
        --|js (js文件)
            ---|components (模板组件)
            ---|root.js (入口文件)
        --|bundle.js (Webpack打包后的文件)
    -|index.html
    -|package.json (项目及npm包版本信息)
    -|webpack.config.js (webpack配置文件)
```
**五、配置webpack**

```
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
// 因为我们的webpack.config.js文件不在项目根目录下，所以需要一个路径的配置
var path = require('path');

module.exports = {
  context: path.join(__dirname),
  devtool: debug ? "inline-sourcemap" : null,
  //入口文件
  entry: "./src/js/root.js",
  //babel重要的loader在这里
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
            //添加两个presents 使用这两种presets处理js或者jsx文件
          presets: ['react', 'es2015'],
          plugins: ['react-html-attrs'], //添加组件的插件配置
        }
      },
      { test: /\.less$/, loader: 'style-loader!css-loader!less' },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  //定义构建后的文件输出
  output: {
    path: __dirname,
    filename: "./src/bundle.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};

```
**六、入口文件**
```
root.js

//react.js是React 的核心库
import React from 'react';
//react-dom.js是提供与DOM相关的功能
import ReactDOM from 'react-dom';

import MediaQuery from 'react-responsive';

import '../css/reset.less';(引入less样式文件)
...

import {Router, Route, IndexRoute, hashHistory } from 'react-router';
import {createHashHistory } from 'history';
var routerHistory = require('react-router').useRouterHistory;   //去掉地址中默认的?_k=****
const appHistory = routerHistory(createHashHistory)({ queryKey: false }) ;

//引入组件
import MyIndex from './components/index/index';
import ContactUsIndex from './components/contactUs/contactUsIndex';
...


export default class Root extends React.Component {
	render() {
		return (
			<div>
			    //PC端
				<MediaQuery query='(min-device-width: 1224px)'>
					<Router history={appHistory}>
						<Route path='/' component={MyIndex}></Route>
						<Route path='/contactUs' component={ContactUsIndex} />
						...
					</Router>
				</MediaQuery>
				//移动端
				<MediaQuery query='(max-device-width: 1224px)'>
				</MediaQuery>
			</div>
		);
	};
}
ReactDOM.render(
	<Root/>, document.getElementById('mainContainer'));

```






















































