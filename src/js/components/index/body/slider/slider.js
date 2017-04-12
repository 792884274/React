import React from 'react';

import SliderItem from './sliderItem';
import SliderDots from './sliderDots';

export default class Slider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nowLocal: 0,
		};
	};
	//�ж��˶�״��
	turn(n) {
		var itemIndex = this.state.nowLocal + n;
		if(itemIndex < 0) {
			itemIndex = itemIndex + this.props.items.length;
		}
		if(itemIndex >= this.props.items.length) {
			itemIndex = itemIndex - this.props.items.length;
		}
		this.setState({nowLocal: itemIndex});
	};
	//�Զ��ֲ�
	goPlay() {
		if(this.props.autoplay) {
			this.autoPlayFlag = setInterval(() => {
				this.turn(1);
			}, this.props.delay*1000);
		}
	};
	//��ͣ�ֲ�
	pausePlay() {
		clearInterval(this.autoPlayFlag);
	};
	//��ʵDOM��Ⱦ��ִ��
	componentDidMount() {
		this.goPlay();
	};
	//����
	componentWillUnmount() {
		clearInterval(this.autoPlayFlag);
	};
	render() {
		let count = this.props.items.length;
		let itemNodes = this.props.items.map((item, index) => {
			return <SliderItem item={item} count={count} key={'item' + index} />;
		});
		let dotsNode = <SliderDots turn={this.turn.bind(this)} count={count} nowLocal={this.state.nowLocal} />;
		return (
			<div className="slider" onMouseOver={this.props.pause?this.pausePlay.bind(this):null} onMouseOut={this.props.pause?this.goPlay.bind(this):null}>
				<ul style={{left: -100*this.state.nowLocal + "%",transitionDuration: this.props.speed + "s",width: this.props.items.length*100 + "%"}}>
					{itemNodes}
				</ul>
				{this.props.dots?dotsNode:null}
			</div>
		);
	}
}
Slider.defaultProps = {
	speed: 1,
	delay: 2,
	pause: true,
	autoplay: true,
	dots: true,
	arrows: true,
	items: [],
};
Slider.autoPlayFlag = null;