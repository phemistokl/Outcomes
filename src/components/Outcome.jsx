import React from 'react';

import Row from './Row.jsx';

import TextField from 'material-ui/lib/text-field';

const Outcome = React.createClass({
	render() {
		return (
			<div className="outcome">
			<div className="row">
				<div className="col-md-3"><TextField hintText={this.props.name} /></div> 
				<div className="col-md-3"><TextField hintText={this.props.quarter_1} /></div> 
				<div className="col-md-3"><TextField hintText={this.props.quarter_2} /></div> 
				<div className="col-md-3"><TextField hintText={this.props.quarter_3} /></div> 
			</div>
			</div>
			);
	}
});

export default Outcome;