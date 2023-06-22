import logo from './logo.svg';
import './App.css';
import AddDetails from './components/addDetails';

import DisplayData from './displayData';

import { useState } from 'react';

function App() {

  return (
    <div>
       <div className = "container">
     
        <AddDetails/>    
       </div >
       <div className = "output"> 
     
        <DisplayData/>
        </div>

    </div>
    
  );
}

export default App;
