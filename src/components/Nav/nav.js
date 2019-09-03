import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import MenuLink from '../MenuLink/menuLink';

import './style.css'

// 高级组件  一个函数接受一个组件作为参数， 返回一个函数， 该返回的函数返回一个组件
// const withRouter = (component) => () => <Route component={ component }></Route>;

// const withRouter = (component) => {
// 	return () => {
// 		return <Route component={ component }></Route>
// 	}
// };

class Nav extends Component {
	render() {
		return (
		<div className="nav">
			<span className="logo" onClick={ this.handleClick }>微一案</span>
			{/* <NavLink to='/' exact>首页</NavLink>
			<NavLink to="/activities">动态</NavLink>
			<NavLink to="/topics">话题</NavLink>
			<NavLink to="/login">登陆</NavLink> */}

			<MenuLink to='/' exact>首页</MenuLink>
			<MenuLink to="/activities">动态</MenuLink>
			<MenuLink to="/topics">话题</MenuLink>
			<MenuLink to="/login">登陆</MenuLink>
		</div>
		)
	}

	handleClick = () => {
		console.log(this.props);
		this.props.history.push('/')
	}
}

export default withRouter(Nav);
// react-router-dom 给我们封装了一个组件withRouter 如果你的哪个组件想使用 Route组件的方法(match, loaction, history)  可以调用withRoute  传入组件
