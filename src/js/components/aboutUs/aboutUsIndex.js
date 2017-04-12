import React from 'react';

import MyHeader from '../common/header';
import MyFooter from '../common/footer';
import AboutUs from './aboutUs';

const aboutUs = [
	{
		src: './src/images/aboutUs/aboutUs-0.png',
		alt: 'images0'
	},
	{
		src: './src/images/aboutUs/aboutUs-1.png',
		alt: 'images1'
	}
];
export default class AboutUsIndex extends React.Component {
	constructor() {
		super();
	};
	render() {
		return (
			<div>
				<MyHeader indexAcitve={0}/>
				<AboutUs items={aboutUs}></AboutUs>
				<MyFooter/>
			</div>
		);
	}
}