var React = require('react');
var ReactDOM = require('react-dom');
import '../css/reset.less';
import '../css/common.less';
import '../css/pc.less';

import {Router, Route, IndexRoute, hashHistory } from 'react-router';
import {createHashHistory } from 'history';
var routerHistory = require('react-router').useRouterHistory;   //È¥µô?_k=****
const appHistory = routerHistory(createHashHistory)({ queryKey: false }) ;
import MyIndex from './components/index/index';
import ContactUsIndex from './components/contactUs/contactUsIndex';
import WeiShiIndex from './components/lekaweishi/weishiIndex';
import DongTaiIndex from './components/lekadongtai/dongtaiIndex';
import ZhuanTouIndex from './components/lekazhuantou/zhuantouIndex';
import AboutUsIndex from './components/aboutUs/aboutUsIndex';

import MediaQuery from 'react-responsive';
export default class Root extends React.Component {
	render() {
		return (
			<div>
				<MediaQuery query='(min-device-width: 1224px)'>
					<Router history={appHistory}>
						<Route path='/' component={MyIndex}></Route>
						<Route path='/contactUs' component={ContactUsIndex} />
						<Route path='/lekaweishi' component={WeiShiIndex} />
						<Route path='/lekadongtai' component={DongTaiIndex} />
						<Route path='/lekazhuantou' component={ZhuanTouIndex} />
						<Route path='/aboutUs' component={AboutUsIndex} />
					</Router>
				</MediaQuery>
				<MediaQuery query='(max-device-width: 1224px)'>
				</MediaQuery>
			</div>
		);
	};
}
ReactDOM.render(
	<Root/>, document.getElementById('mainContainer'));
