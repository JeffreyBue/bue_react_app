import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';
import { connect } from 'react-redux';

import { getFunction } from './rootDuck';

const mapStateToProps = state => ({
	storeState: state.storeState
});


export default
@connect(
	mapStateToProps,
	{ getFunction }
)
class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			storeState
		} = this.props;
		
		return <Router>
			<div>
				<div><h1>Header</h1></div>
				<Switch>
					<Route exact path="/" render={() => <div><p>Hello React</p></div>} />
				</Switch>
				<div><h1>Footer</h1></div>
			</div>
		</Router>;
	}
}