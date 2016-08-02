import React from 'react';

import Header from './Header.jsx';
import OutcomesGrid from './OutcomesGrid.jsx';

const App = React.createClass({
	getInitialState: function() {
		return {
				income: [{
					id: 0,
					name: "Продажа",
					quarter_1: 234,
					quarter_2: 456,
					quarter_3: 654,
					}, {
					id: 2,
					name: "Продажа",
					quarter_1: 234,
					quarter_2: 456,
					quarter_3: 654,
					}, {
					id: 3,
					name: "Продажа",
					quarter_1: 234,
					quarter_2: 456,
					quarter_3: 654,
				}],
				outcome: [{
					id: 0,
					name: "Покупка",
					quarter_1: 234,
					quarter_2: 456,
					quarter_3: 654,
					quarter_4: 124,
					}, {
					id: 2,
					name: "Покупка",
					quarter_1: 234,
					quarter_2: 456,
					quarter_3: 654,
					quarter_4: 124,
					}, {
					id: 3,
					name: "Покупка",
					quarter_1: 234,
					quarter_2: 456,
					quarter_3: 654,
					quarter_4: 124,
				}]
			};
	},

	render() {
		return (
			<div className="container-fluid">
			<div className="app">
				<div className="row">
				<h2 className="App__header">Outcomes App</h2>
				</div>
				<div className="row">
				  <div className="col-md-3"></div>
				  <div className="col-md-3">1 Quartal</div>
				  <div className="col-md-3">2 Quartal</div>
				  <div className="col-md-3">3 Quartal</div>
				</div>
				<div className="outcomes-grid">
					<OutcomesGrid income={this.state.income} outcome={this.state.outcome}/>
				</div>
			</div>	
			</div>
			);
	}
});

export default App;