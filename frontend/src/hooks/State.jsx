import React, { useState } from 'react'

const State = () => {
    const[count,Setcount] =  useState(0);
    const [like,SetLike] = useState(0);
  return (
    <div>
      <div>{count}</div>
      <button onClick={()=>Setcount(count+1)}>Increment</button>
      <h2>{like}</h2>
      <button onClick={()=>SetLike(like+1)}>Like</button>
      <button onClick={()=>{
      if(like <= 0)
        return;
        SetLike(like -1)}}>unlike</button>
    </div>
  )
}

export default State
