import { useState, useEffect } from "react"

function DisplayData(){

const [profile, setProfile] = useState([]);


useEffect(()=>{

    fetch('http://localhost:7000/profile')
    .then(res =>{
        return res.json();
        
    }).then(data =>{
        setProfile(data);       
        console.log(data);
    })
},[])

function deleteData(){


}

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
              
                {/* <div className="Position">
                     <p>Position-{worker.jopPosition}</p> 
                      </div>
             */}
                <div className="delete">
                     <button> Delete</button>
                </div>
            
              </div>
           
           ))}  
        </div>

    )
} 

export default DisplayData