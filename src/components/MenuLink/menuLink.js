import React from 'react';
import { Route } from 'react-router-dom';

import './style.css';

const MenuLink = ({to, ...props}) => {
	// console.log(props);

	// component render children
	return (
		
		// <Route path={to} render={(p) => {
		// 用render 渲染的时候只有路径匹配的时候才会去渲染

		<Route path={to} { ...props } children={(p) => {
			// children 无论路径匹配不匹配都会渲染
			console.log(p.match, 'match');
			return (
				<span 
					onClick={() => {
					p.history.push(to)
				}}
				className={ p.match ? 'active' : ''}
				>
					{ props.children }
					{/* 组件内部的值放在了props.children  会直接渲染出来*/}
				</span>
			)
		}}></Route>
	)
}

export default MenuLink
