import React, { Component } from 'react';
import './style.css'

export default class Home extends Component {
	authorInput = React.createRef();
	articleInput = React.createRef(); // 非受控组件

	render() {
		console.log(process.env.NODE_ENV);
		
		return (
			<div className="home">
				<h4>
				发表话题：
				</h4>
				<form onSubmit={ this.handleSubmit }>
				<div className="form-box">
					<label htmlFor="author">作者姓名：</label>
					<input id="author" required ref={ this.authorInput }></input>
				</div>
				<div className="form-box">
					<label htmlFor="article">文章标题：</label>
					<input id="article" required ref={ this.articleInput }></input>
				</div>
				<button className="confirm-btn">提交</button>
				</form>
			</div>
		)
	}

	componentDidMount() {
		const { state  } = this.props.location;
		const articleInfo = state && state.article; // state没值的时候为undefined
		if(articleInfo) {
			this.authorInput.current.value = articleInfo.author || '';
			this.articleInput.current.value = articleInfo.title || ''; 
		}
	}
	

	handleSubmit = (e) => {
		e.preventDefault();
		const isLogin = document.cookie.includes('login=true');
		const author = this.authorInput.current.value;
		const title = this.articleInput.current.value;
		const id = Math.floor( ( Math.random() * 10000000000000 ) );

		const article = {
			author,
			title,
			id
		};

		if(isLogin) {
			this.setArticleStorage(article);
		} else {
			alert('没有登陆， 不能发表话题！');
			this.props.history.push({
				pathname: '/login',
				state: {
					article,
					from: this.props.history.location.pathname
				}
			})
		}
	}

	setArticleStorage = (article) => {
		const articleList = JSON.parse( localStorage.getItem('articleList') )|| [];
		articleList.push(article);
		localStorage.setItem('articleList', JSON.stringify(articleList));
		this.jumpToTopics();
	}

	jumpToTopics = () => {
		console.log(this.props);
		this.props.history.push('/topics')
	}
}
