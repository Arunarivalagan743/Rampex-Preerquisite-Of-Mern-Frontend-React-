import React from "react";
import './style.css';
const Profile = ({name,skills})=>{
    return(
        <div>
        profile 
        <h1>Hi {name}</h1>
        <button className="hi-button">Hi</button>
        <ul>
            {
                skills.map((skill,index)=>{
                     return <li key = {index}>{skill}</li>
                })
                   
              
            }
        </ul>
    </div>
    )
}
export default Profile;

