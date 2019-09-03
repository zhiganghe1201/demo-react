import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// 高阶组件 Private 私人的；
					// 解构赋值 重命名
const PrivateRoute = ({ component:Component, ...props}) => {
	// 返回一个代码块
	return (
		<Route { ...props } render={(p) => {
			const isLogin = document.cookie.includes('login=true');
			if(isLogin) {
				return <Component></Component>
			} else {
				window.alert('你还没有登陆，需转置登陆页登陆！')
				return <Redirect to={{
					pathname: '/login',
					state: {
						from: p.location.pathname
					}
				}}></Redirect>
			}
		}}></Route>
	)
}

export default PrivateRoute
