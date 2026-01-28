import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { userContext } from '../App'
import Profile from '../components/Profile/Profile'

function Home() {
  const [user, setUser] = useState("abs")
  
  return (
    <>
      <userContext.Provider value={{user: user, setUser: setUser}}>
        <div className='px-5 py-3'>
          <h1 className='text-2xl font-bold mb-4'>Home Page</h1>
          <Profile skills={["Python", "Java", "JavaScript"]} />
        </div>
      </userContext.Provider>
      <div className='px-5'>
        <Link to={'/reducer'} className='text-blue-500 underline'>
          Go to Reducer Example
        </Link>
      </div>
    </>
  )
}

export default Home
