**�÷�**
```
git clone ��ַ
npm install
webpack --watch

```
�ڷ������д򿪣�������WebStorm(���÷�����)�д򿪡�

**һ��������Ŀ����ʼ��**
```
$ mkdir React               Linux mkdir����Ŀ¼React
$ cd React                  ��React�ļ���
$ npm init                  npm��ʼ����Ŀ
$ touch webpack.config.js   touch����webpack.config.js�����ļ�

```
npm init��ʼ������package.json�ļ���������Ŀ����Ҫ�ĸ���ģ�飬�Լ���Ŀ��������Ϣ(���ơ��汾��)��
>npm install ������������ļ����Զ���������ģ�飬Ҳ����������Ŀ��������кͿ���������

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
**����npm��װ��Ŀ�����������**

webpack��ذ�
```
$ npm install webpack webpack-dev-server html-webpack-plugin --save-dev
```
css\less��ʽ�ļ�
```
$ npm install css-loader style-loader less-loader less --save-dev
```
babel\react\es6֧�ְ�
```
$ npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev
$ npm install react react-dom react-router react-mixin react-responsive --save
```
>--save-dev (devDependencies)���㿪��ʱ��������ģ�飬--save (dependencies) ���㷢��֮��������ģ�顣

**�����������̽ṹĿ¼**
```
React
    -|src
        --|css (��ʽ�ļ�)
        --|images (ͼƬ�ļ�)
        --|js (js�ļ�)
            ---|components (ģ�����)
            ---|root.js (����ļ�)
        --|bundle.js (Webpack�������ļ�)
    -|index.html
    -|package.json (��Ŀ��npm���汾��Ϣ)
    -|webpack.config.js (webpack�����ļ�)
```
**�塢����webpack**

```
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
// ��Ϊ���ǵ�webpack.config.js�ļ�������Ŀ��Ŀ¼�£�������Ҫһ��·��������
var path = require('path');

module.exports = {
  context: path.join(__dirname),
  devtool: debug ? "inline-sourcemap" : null,
  //����ļ�
  entry: "./src/js/root.js",
  //babel��Ҫ��loader������
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
            //�������presents ʹ��������presets����js����jsx�ļ�
          presets: ['react', 'es2015'],
          plugins: ['react-html-attrs'], //�������Ĳ������
        }
      },
      { test: /\.less$/, loader: 'style-loader!css-loader!less' },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  //���幹������ļ����
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
**��������ļ�**
```
root.js

//react.js��React �ĺ��Ŀ�
import React from 'react';
//react-dom.js���ṩ��DOM��صĹ���
import ReactDOM from 'react-dom';

import MediaQuery from 'react-responsive';

import '../css/reset.less';(����less��ʽ�ļ�)
...

import {Router, Route, IndexRoute, hashHistory } from 'react-router';
import {createHashHistory } from 'history';
var routerHistory = require('react-router').useRouterHistory;   //ȥ����ַ��Ĭ�ϵ�?_k=****
const appHistory = routerHistory(createHashHistory)({ queryKey: false }) ;

//�������
import MyIndex from './components/index/index';
import ContactUsIndex from './components/contactUs/contactUsIndex';
...


export default class Root extends React.Component {
	render() {
		return (
			<div>
			    //PC��
				<MediaQuery query='(min-device-width: 1224px)'>
					<Router history={appHistory}>
						<Route path='/' component={MyIndex}></Route>
						<Route path='/contactUs' component={ContactUsIndex} />
						...
					</Router>
				</MediaQuery>
				//�ƶ���
				<MediaQuery query='(max-device-width: 1224px)'>
				</MediaQuery>
			</div>
		);
	};
}
ReactDOM.render(
	<Root/>, document.getElementById('mainContainer'));

```






















































