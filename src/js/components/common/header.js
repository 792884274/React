import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory,Link} from 'react-router';

export default class MyHeader extends React.Component {
	constructor(){
		super();
		this.state ={
			index: 0,
			itemChildren:[],
			bgShow:false,
			itemActive:0
		};
	};
	handleClick(i) {
		this.setState({
			index: i,
		});
	};
	itemMouseEnter(list,index){
		if (list) {
			var itemChildren=list.map(function (item) {
				return (
					<div key={item.key}>
						<Link to={item.to}>{item.name}</Link>
					</div>
				);
			}.bind(this));
			this.setState({
				itemChildren: itemChildren,
				bgShow:true,
				itemActive:index
			});
		}
	};
	itemMouseLeave(list){
		this.setState({
			itemChildren: [],
			bgShow:false
		});
	}
	render() {
		var navMsg=[
			{
				'index': 0,
				'name':'首页',
				'key':'shouye',
				'to':'/'
			},
			{
				'index': 1,
				'name':'乐卡威视',
				'key':'weishi',
				'to':'/lekaweishi'
			},
			{
				'index': 2,
				'name':'乐卡砖头',
				'key':'zhuantou',
				'to':'/lekazhuantou'
			},
			{
				'index': 3,
				'name':'乐卡动态',
				'key':'dongtai',
				'to':'/',
				'children':[
					{
						'name':'企业新闻',
						'key':'qiye',
						'to':'/lekadongtai'
					},
					{
						'name':'行业新闻',
						'key':'hangye',
						'to':'/'
					}
				]
			},
			{
				'index': 4,
				'name':'关于乐卡',
				'key':'guanyu',
				'to':'/',
				'children':[
					{
						'name':'关于我们',
						'key':'guanyuwomen',
						'to':'/aboutUs'
					},
					{
						'name':'联系我们',
						'key':'lianxiwomen',
						'to':'/contactUs'
					}
				]
			}
		];
		var navItems = navMsg.map(function (item,index) {
			if (item.children!=='undefined'&&index==this.state.itemActive) {
				var itemChildren=this.state.itemChildren;
			}
			return (
				<li key={item.key} class="navItem" onMouseEnter={this.itemMouseEnter.bind(this,item.children,index)} onMouseLeave={this.itemMouseLeave.bind(this,item.children)}>
					<Link to={item.to} onClick={function(){this.handleClick(item.index)}.bind(this)} className={this.props.indexAcitve == item.index?'navItem active':'navItem'}>{item.name}</Link>
					{itemChildren}
				</li>
			);
			itemChildren=[];
		}.bind(this));
		return (

			<header class="header">
				<div class="tabBorder"></div>
				<div class="headerContainer">
					<Link to={`/`} class="logo">
						乐卡车联
						<img src="./src/images/index/header/logo.gif" alt=""/>
					</Link>
				</div>
				<div class="tabs">

					<ul class="navItems clearfix">
						{navItems}
					</ul>
				</div>
				<div className={this.state.bgShow?'itemChildrenBg_active':'itemChildrenBg'}></div>
			</header>
		)
	}
}
MyHeader.defaultProps = {
	indexAcitve: 0
};