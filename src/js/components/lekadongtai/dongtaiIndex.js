import React from 'react';

import MyHeader from '../common/header';
import MyFooter from '../common/footer';
import DongTai from './dongtai';

const dongtai = [
	{
		src: './src/images/lekadongtai/dongtai-0.png',
		alt: 'images0'
	},
	{
		src: './src/images/lekadongtai/dongtai-1.png',
		alt: 'images1'
	}
];
export default class DongTaiIndex extends React.Component {
	constructor() {
		super();
	};
	render() {
		return (
			<div>
				<MyHeader indexAcitve={0}/>
				<DongTai items={dongtai}></DongTai>
				<MyFooter/>
			</div>
		);
	}
}