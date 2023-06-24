import axios from 'axios';
import { useState } from "react"


function AddDetails(){
  
const [name,setName] = useState('');
const [surname,setSurname] = useState('');
const [dateOfBirth,setDateOfBirth]= useState('');
const [biography,setBiography]= useState('');
const [email,setEmail]= useState('');
const [phoneNumber,setPhoneNumber]= useState('');
const [image,setImage]=useState('');
const [isPending,setIsPending] = useState('');
const [jobPosition,setJobPosition]=useState('');

const profile = {
    name,
    surname,
    dateOfBirth,
    biography,
    email,
    phoneNumber,
    jobPosition,
    image
 } 
    const handleSubmit = (e) =>{
     e.preventDefault();
     
       setIsPending(true);
       
      <p>is this happeninr</p>
        fetch( 'http://localhost:7000/profile',{
    
        method: 'POST',
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(profile)
    }).then(()=>{
    
          setIsPending(false);
    })
}

    function UploadImage (){
    
   const  hanldleImageUpload = () =>{
        
    const formImage = new formImage();
    formImage.append('image',image)
     axios.post('http://localhost:7000/profile',formImage).then(()=>{

       setIsPending(false);   })
    }
    }


   
    return(
        <div>
            <h1>log your profile</h1>
            
            <form onSubmit= {handleSubmit}> 
                <input type= "text" placeholder="Name" required value= {name} onChange={
                (e) =>setName(e.target.value)}/> <br></br>
               <input type= "text" placeholder="Surname" required value= {surname} onChange={
                (e) =>setSurname(e.target.value)}/> <br></br>
                 <input type= "date" placeholder="Date of birth" required value= {dateOfBirth} onChange={
                (e) =>setDateOfBirth(e.target.value)}/> <br></br>
                <input type= "text" placeholder="Biography" required value= {biography} onChange={
                (e) =>setBiography(e.target.value)}/> <br></br>
                <input type= "text" placeholder="Email" required value= {email} onChange={
                (e) =>setEmail(e.target.value)}/> <br></br>
                <input type= "text" placeholder="Phone Number" required value= {phoneNumber} onChange={
                (e) =>setPhoneNumber(e.target.value)}/> <br></br>
                
                <input type= "text" placeholder="Job position" required value= {jobPosition} onChange={
                (e) =>setJobPosition(e.target.value)}/> <br></br>
                
                <button>load emage</button><br></br> 
                <dev className="intpuB-button">
                 {!isPending && <button type='submit'>load details</button>} 
               { isPending && <button type='submit' disabled>loading...</button>}
               
                </dev>
               
            </form>
            
        </div>
    )
}

export default AddDetails