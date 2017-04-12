import React from 'react';

import AboutDetails from './aboutDetails';

export default class About extends React.Component {
	constructor(props) {
		super(props);
	};
	render() {
		let count = this.props.items.length;
		let itemNodes = this.props.items.map((item, index) => {
			return <AboutDetails item={item} count={count} key={'item' + index} />;
		});
		return (
			<div class="about">
				<ul>
					{itemNodes}
				</ul>
			</div>
		);
	}
}