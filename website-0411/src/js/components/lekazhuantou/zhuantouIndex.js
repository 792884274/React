import React from 'react';

import MyHeader from '../common/header';
import MyFooter from '../common/footer';
import ZhuanTou from './zhuantou';

const zhuantou = [
	{
		src: './src/images/lekazhuantou/zhuantou-0.png',
		alt: 'images0'
	},
	{
		src: './src/images/lekazhuantou/zhuantou-1.png',
		alt: 'images1'
	}
];
export default class ZhuanTouIndex extends React.Component {
	constructor() {
		super();
	};
	render() {
		return (
			<div>
				<MyHeader indexAcitve={2}/>
				<ZhuanTou items={zhuantou}></ZhuanTou>
				<MyFooter/>
			</div>
		);
	}
}