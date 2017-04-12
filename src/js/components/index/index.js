var React = require('react');
var ReactDOM = require('react-dom');
import MyHeader from '../common/header';
import MyFooter from '../common/footer';
import MyBody from './body';

export default class Index extends React.Component {
	render() {
		return (
			<div>
				<MyHeader indexAcitve={0}/>
				<MyBody/>
				<MyFooter/>
			</div>
		);
	}
}