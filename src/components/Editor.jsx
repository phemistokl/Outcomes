import React from 'react';

import RaisedButton from 'material-ui/lib/raised-button';

const Editor = React.createClass({

	render() {
		return (
			<div className="editor">
				<RaisedButton label="Add" primary={true} onClick={this.handleComeAdd}/>
			</div>
			);
	}
});

export default Editor;