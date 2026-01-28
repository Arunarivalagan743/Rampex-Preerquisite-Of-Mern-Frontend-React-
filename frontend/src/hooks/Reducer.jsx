import React, { useReducer } from 'react'

// useReducer -> it is the advance stage of useState/ used to handle complex state logic
// many actions on single state
// Syntax
// const [state,dispatch] = useReducer(reducer_Function,initial_State)

function reducer(state, action) {
  switch(action.type) {
    case "INCREMENT":
      return { count: state.count + 1 }
    case "DECREMENT":
      return { count: state.count - 1 }
    case "RESET":
      return { count: 0 }
    default:
      return state;
  }
}

const initialState = { count: 0 }

function Reducer() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <div className='p-5'>
      <h1 className='text-2xl font-bold mb-4'>Reducer Example:</h1>
      <h1 className='text-xl mb-4'>Count: {state.count}</h1>
      <div className='space-x-2'>
        <button 
          className='bg-blue-500 text-white px-4 py-2 rounded'
          onClick={() => dispatch({type: "INCREMENT"})}
        >
          +
        </button>
        <button 
          className='bg-red-500 text-white px-4 py-2 rounded'
          onClick={() => dispatch({type: "DECREMENT"})}
        >
          -
        </button>
        <button 
          className='bg-gray-500 text-white px-4 py-2 rounded'
          onClick={() => dispatch({type: "RESET"})}
        >
          RESET
        </button>
      </div>
    </div>
  )
}

export default Reducer
