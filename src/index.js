import React from 'react';
import { render } from 'react-dom';
import { 
	BrowserRouter as Router,  // 路由容器： 有基于H5 history Api的BrowserRouter 还有HashRouter
	Route, //路径， 页面会被渲染在这里
	Switch, // 匹配到路径就不在向下匹配了
	Redirect, 
	// Link, // 点击跳转 会被渲染成a标签;   NavLink 点击后会加一个class="active"
	// NavLink
} from 'react-router-dom';

import Home from './pages/Home/home';
import Login from './pages/Login/login';
import Activities from './pages/Activities/activities';
import Topics from './pages/Topics/topics';
import Article from './pages/Article/article';
import NoMatch from './pages/NoMatch/noMatch';

import PrivateRoute from './components/PrivateRoute/privateRoute'

import App from './App';

import './styles/index.css';
// index 里面是主路由的配置

render(
	<Router>
		<App>
			<Switch>
				{/* exact 精确的匹配 */}
				<Route path="/" exact component={ Home }></Route> 
				<Route path="/activities" component={ Activities }></Route>
				{/* <Route path="/topics" component={ Topics }></Route> */}
				<PrivateRoute path="/topics" component={ Topics }></PrivateRoute>
				<Route path="/login" component={ Login }></Route>
				<Route path="/article/:id" component={ Article }></Route>
				{/* 动态路由 */}
				<Route path="/error.html" component={ NoMatch }></Route>
				<Redirect to="/error.html" ></Redirect>

				{/* <Route></Route> */}
				{/* 如果Route组件没有path时 如果匹配不到所有路径时 则匹配该Route */}
			</Switch>
		</App>
	</Router>,
	document.getElementById('root')
);