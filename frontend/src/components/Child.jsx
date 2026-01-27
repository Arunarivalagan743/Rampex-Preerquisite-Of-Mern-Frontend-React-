import React from 'react'

function Child({ send }) {
  
  return (
    <div>
    <button onClick={()=>{send("hello from child")}}>
        Send data
    </button>
    </div>
  )
}

export default Child
