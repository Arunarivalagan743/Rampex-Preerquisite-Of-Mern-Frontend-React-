import React, { useContext } from "react";
import { userContext } from '../../App'
import './style.css';

const Profile = ({skills}) => {
    const name = useContext(userContext)
    console.log(name)
    
    return(
        <div>
        <h1 className='text-xl mb-2'>Hello {name.user}. How are you ??</h1>
        <h2 className='font-bold mb-2'>Skills:</h2>
        <ul className='list-decimal pl-5'>
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

