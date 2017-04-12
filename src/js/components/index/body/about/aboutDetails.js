import React from 'react';
import {Link} from 'react-router';

export default class AboutDetails extends React.Component {
	constructor(props) {
		super(props);
	};
	render() {
		let {count,item} = this.props;
		let width = (100/count-0.25)+'%';
		return (
			<li className="about-item" style={{width: width}}>
				<Link to={item.to}>
					<img src={item.src} alt={item.alt} />
				</Link>
			</li>
		);
	}
}