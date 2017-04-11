import React from 'react';

import MyHeader from '../common/header';
import MyFooter from '../common/footer';
import WeiShi from './weishi';

const weishi = [
	{
		src: './src/images/lekaweishi/weishi-0.png',
		alt: 'images0'
	},
	{
		src: './src/images/lekaweishi/weishi-1.png',
		alt: 'images1'
	},
	{
		src: './src/images/lekaweishi/weishi-2.png',
		alt: 'images2'
	},
	{
		src: './src/images/lekaweishi/weishi-3.png',
		alt: 'images3'
	},
	{
		src: './src/images/lekaweishi/weishi-4.png',
		alt: 'images4'
	},
	{
		src: './src/images/lekaweishi/weishi-5.png',
		alt: 'images5'
	},
	{
		src: './src/images/lekaweishi/weishi-6.png',
		alt: 'images6'
	}
];
export default class WeiShiIndex extends React.Component {
	constructor() {
		super();
	};
	render() {
		return (
			<div>
				<MyHeader indexAcitve={1}/>
				<WeiShi items={weishi}></WeiShi>
				<MyFooter/>
			</div>
		);
	}
}