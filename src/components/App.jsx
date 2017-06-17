import React from 'react';
import QuotePanelContainer from '../containers/QuotePanelContainer';

export default function App() {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero-body">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <QuotePanelContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
