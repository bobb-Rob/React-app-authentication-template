import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from './features/greetingSlice';

const Greeting = () => {
  const greeting = useSelector(state => state.greeting);
  const dispatch = useDispatch();
  
  return (
    <div>
      <h1>{greeting.message}</h1>
      <button
        style={{ fontSize: '2em', padding: 20, backgroundColor: 'blue', color: 'white' }}
        type="button"
        onClick={() => {
          dispatch(fetchGreeting())
        }}
      >
        greet
      </button>
    </div>
  )
}

export default Greeting;