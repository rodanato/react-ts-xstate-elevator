import React from 'react';
import './App.scss';
import Elevator from './elevator/elevator';


function App() {
  return (
    <div className="App">
      <div className="elevator__container">
        <Elevator />
      </div>
    </div>
  );
}

export default App;
