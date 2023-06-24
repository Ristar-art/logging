import axios from "axios";
import { ReactDOM } from "react";

import { useState, useEffect } from "react"

function DisplayData(){

const [profile, setProfile] = useState([]);




    const fetctPodt = async() =>{
    const res = await fetch('http://localhost:7000/profile');
        const data = await res.json();
        setProfile(data)
    }
   
     useEffect(()=>{
        fetctPodt()
      },[]);

const deletePrifile =async(id) => {  
const res = await fetch('http://localhost:7000/profile/${profile/${id}',{
    method: 'DELETE'
   
}

); 
alert(`The name you entered was: ${res.status }`);
if(res.status === 404){
    
    setProfile(profile.filter((profile)=>{return profile.id !==id;}))
}


};
    return(
        
        <div ClassName = "Front">
           <h1>Worker profiles</h1>
         { profile.map((worker) => (

          <div className="worker-preveiw" key={worker.id}>
                 {/* <div className="Image">
                  <img>{worker.image}</img>
                  </div> */}
                 <div className="Name">
                     <p>{worker.surname}-{worker.name}</p>            
                 </div> 
                      
                 <div className="dateOfBirth">
                      <p>Born in {worker.dateOfBirth}</p> 
                 </div>
                 <div className="biography">
                     <p>{worker.biography}</p> 
                 </div>
                 <div className="email">
                    <p>Email-{worker.email}</p> 
                 </div>
                 <div className="phoneNumber">
                     <p>Call-{worker.phoneNumber}</p> 
                 </div>
              
                 <div className="Position">
                     <p>{worker.jopPosition}</p> 
              
                      </div>
                      <div className="delete">
           <button onClick = {()=>  deletePrifile (worker.id)} > Delete</button>
      </div> 
              </div>
           
           ))} 

           
        </div>

    )
} 

export default DisplayData