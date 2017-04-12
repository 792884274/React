import React from 'react';

export default class WeiShi extends React.Component {
	constructor(props) {
		super(props);
	};
	render() {
		let itemNodes = this.props.items.map((item, index) => {
			return <img src={item.src} alt={item.alt} key={'item' + index}/>;
		});
		return (
			<div class="lekaweishi">
				{itemNodes}
			</div>
		);
	}
}