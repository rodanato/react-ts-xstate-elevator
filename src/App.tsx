import React from 'react';
import './App.scss';
import ExternalView from './external-view/external-view';
import InternalView from './internal-view/internal-view';

function App() {
  return (
    <div className="App">
      <div className="elevator__container">
        <ExternalView />
        <InternalView />        
      </div>
    </div>
  );
}

export default App;
