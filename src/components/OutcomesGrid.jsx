import React from 'react';

import Income from './Income.jsx';
import Outcome from './Outcome.jsx';
import Editor from './Editor.jsx';

const OutcomesGrid = React.createClass({
	render() {
		return (
			<div className="outcomes-grid">
				<div className="income-sector">
				<div className="row">
					<div className="col-md-4"><h3>Incomes</h3><div className="botton-box"><Editor onComeAdd={this.handleComeAdd}/></div></div>	
				</div>
					{
						this.props.income.map(function(sincome) {
							return <Income key={sincome.id} name={sincome.name} quarter_1={sincome.quarter_1} quarter_2={sincome.quarter_2} quarter_3={sincome.quarter_3} quarter_4={sincome.quarter_4} />;
						})
					}	
				</div>	
				<div className="outcome-sector">
				<div className="row">
					<div className="col-md-4"><h3>Outcomes</h3><div className="botton-box"><Editor onComeAdd={this.handleComeAdd}/></div></div>	
				</div>	
					{
						this.props.outcome.map(function(soutcome) {
							return <Outcome key={soutcome.id} name={soutcome.name} quarter_1={soutcome.quarter_1} quarter_2={soutcome.quarter_2} quarter_3={soutcome.quarter_3} quarter_4={soutcome.quarter_4} />;
						})
					}
				</div>	
			</div>
			);
	}
});

export default OutcomesGrid;