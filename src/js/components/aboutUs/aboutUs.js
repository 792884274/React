import React from 'react';

export default class AboutUs extends React.Component {
	constructor(props) {
		super(props);
	};
	render() {
		let itemNodes = this.props.items.map((item, index) => {
			return <img src={item.src} alt={item.alt} key={'item' + index}/>;
		});
		return (
			<div class="aboutUs">
				{itemNodes}
			</div>
		);
	}
}