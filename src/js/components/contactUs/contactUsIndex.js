import React from 'react';

import MyHeader from '../common/header';
import MyFooter from '../common/footer';
import ContactUs from './contactUs';

const contactUs = [
	{
		src: './src/images/contactUs/contactUs-0.png',
		alt: 'images1'
	},
	{
		src: './src/images/contactUs/contactUs-1.png',
		alt: 'images0'
	}
];
export default class ContactUsIndex extends React.Component {
	constructor() {
		super();
	};
	render() {
		return (
			<div>
				<MyHeader/>
				<ContactUs items={contactUs}></ContactUs>
				<MyFooter/>
			</div>
		);
	}
}