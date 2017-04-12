import React from 'react';

import ContactUsDetails from './contactUsDetails';
export default class ContactUs extends React.Component {
	constructor(props) {
		super(props);
	};
	render() {
		let itemNodes = this.props.items.map((item, index) => {
			return <ContactUsDetails item={item} key={'item' + index} />;
		});
		return (
			<div class="contactUs">
				{itemNodes}
			</div>
		);
	}
}