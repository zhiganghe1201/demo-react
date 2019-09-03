import React, { Component } from 'react';

import './style.css';

export default class Login extends Component {
	state = {
		isLogin: document.cookie.includes('login=true')
	}

	render() {
		return (
			<div className="login">
				<button className="login-btn" onClick={ this.handleClick }> 
					{ this.state.isLogin ? '退出' : '登录'}
				</button>
			</div>
		)
	}

	handleClick = () => {
		const isLogin = this.state.isLogin;
		if(isLogin) {
			this.setCookie('login', '', -1);
		} else {
			this.setCookie('login', true, 300);
			this.jumpBack();
			
		}
		this.setState({
			isLogin: !isLogin,
		});
	}

	setCookie = (key, value, day) => {
		const expires = day * 24 * 60 * 60 * 1000;
		const date = new Date( +new Date() + expires );
		document.cookie = `${key}=${value};expires=${date.toUTCString()}`; // 操作cookie  document.cookie 是一个字符串， 会有expires保存时间
	}

	// 通过this.props.location.state 传值
	jumpBack = () => {
		const { location, history } = this.props;
		const from = location.state && location.state.from;

		if(from) {
			alert('回到上一个页面');
		}

		if(from === '/') {
			history.push({
				pathname: from,
				state: {
					article: location.state.article
				}
			})
		} else if(from) {  // 点击登陆后回到跳转前的页面
			history.push(from)
		}

		// process.env.NODE_ENV === 'production'; development
	}
}