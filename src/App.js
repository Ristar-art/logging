import logo from './logo.svg';
import './App.css';
import AddDetails from './components/addDetails';

import DisplayData from './displayData'

import { useState } from 'react';

function App() {

  return (
    <div style={{display:'flex',flexDirection:'row',backgroundColor:'white'}}>
       <div style={{height:"100vh",width:"45vh", backgroundColor:"#FEFFEC", justifyContent:"center",display:'flex'}}>
     
        <AddDetails/>    
       </div >
       <div className = "output"> 
     
        <DisplayData/>
        </div> 

    </div>
    
  );
}

export default App;
