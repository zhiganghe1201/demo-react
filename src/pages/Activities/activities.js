import React from 'react';
import { Route, Switch, Redirect, Prompt } from 'react-router-dom';
//Prompt 提示

import ActivitiesNav from '../../components/ActivitesNav/activitiesNav';
import All from './All/all';
import Articles from './Articles/article';
import Pins from './Pins/pins';
import Recommended from './Recommended/recommended'

import './style.css';

class Activities extends React.Component {
	render() {
		return (
			<>
				{/* <Prompt message="您确定要离开么？" /> */}
				<Prompt message={( location ) => {
					console.log(location); // 点击的路径信息
					if(location.pathname.includes('/activities')) {
						return true
					}
					return window.confirm('确认要离开么？');
				}} />
				
				<div className="activities">
					<ActivitiesNav></ActivitiesNav>
					<div className="content">
						<Switch>
							<Route path="/activities/recommended" component={ Recommended }></Route>
							<Route path="/activities/all" component={ All }></Route>
							<Route path="/activities/articles" component={ Articles }></Route>
							<Route path="/activities/pins" component={ Pins }></Route>
							<Redirect to="/activities/recommended"></Redirect>
						</Switch>
					</div>
				</div>
			</>
		)
	}
}

export default Activities;