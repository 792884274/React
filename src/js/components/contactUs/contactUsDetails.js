import React from 'react';

export default class ContactUsDetails extends React.Component {
	constructor(props) {
		super(props);
	};
	render() {
		let item = this.props.item;
		return (
			<img src={item.src} alt={item.alt} />
		);
	}
}