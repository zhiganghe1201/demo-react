import React, { Component } from 'react'
import Nav from './components/Nav/nav';
// import { Route } from 'react-router-dom';

import './styles/app.css'
export default class App extends Component {
	render() {
		return (
			<div className="app">
				{/* <Nav></Nav>     通过Route的包裹 我们可以使用到Route提供的history方法了  通常Route是用来显示页面级组件的*/}
				{/* <Route component={ Nav }></Route> */}
				<Nav></Nav>
				<div className="content">
					{ this.props.children }
				</div>
			</div>
		)
	}
}
