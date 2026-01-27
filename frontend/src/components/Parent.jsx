import React from 'react'
import Child from './Child'

function Parent() {
    const getData = (data) => {
        console.log("data come from parent", data);
    }
  return (
    <div>
      <Child send={getData}/>
    </div>
  )
}

export default Parent
