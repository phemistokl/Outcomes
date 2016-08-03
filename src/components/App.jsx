import React from 'react';

import IncomeGrid from './IncomeGrid.jsx';
import OutcomeGrid from './OutcomeGrid.jsx';

const App = React.createClass({
    render() {
        return (
          <div className="app">
            <div className="container">
            <div className="row">
            <div className="col-lg-12 col-md-12">
            <h2 className="app-header">Outcomes</h2>
            </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-3"></div>
              <div className="col-lg-3 col-md-3">1 квартал</div>
              <div className="col-lg-3 col-md-3">2 квартал</div>
              <div className="col-lg-3 col-md-3">3 квартал</div>
            </div>
            <div className="income-box">
              <IncomeGrid />
            </div>
            <div className="outcome-box">
              <OutcomeGrid />
            </div>
            </div>
            </div>
            );
    }
});

export default App;
