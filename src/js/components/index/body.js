import React from 'react';
import ReactDOM from 'react-dom';

import Slider from './body/slider/slider';
import About from './body/about/about';

const sliderImages = [
	{
		src: './src/images/index/banner/index0.jpg',
		alt: 'images0',
	},
	{
		src: './src/images/index/banner/index1.png',
		alt: 'images1',
	},
	{
		src: './src/images/index/banner/index2.jpg',
		alt: 'images2',
	},
];
const aboutInfor = [
	{
		src: './src/images/index/about/index-1.png',
		alt: 'images0',
		to:'/contactUs'
	},
	{
		src: './src/images/index/about/index-2.png',
		alt: 'images1',
		to:'/lekaweishi'
	},
	{
		src: './src/images/index/about/index-3.png',
		alt: 'images2',
		to:'/lekadongtai'
	},
	{
		src: './src/images/index/about/index-4.png',
		alt: 'images3',
		to:'/aboutUs'
	}
];

export default class MyBody extends React.Component {
	render() {
		return (
			<div>
				<Slider
					items={sliderImages}
					speed={1}
					delay={2.5}
					pause={true}
					autoplay={true}
					dots={true}
					/>
				<About items={aboutInfor}></About>
			</div>
		)
	}
}

