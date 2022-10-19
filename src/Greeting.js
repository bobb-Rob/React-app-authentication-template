import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from './features/greetingSlice';

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting);
  const dispatch = useDispatch();
  console.log(greeting);

  return (
    <div>
      <h1>{greeting.message}</h1>
      <button
        className="fetch-button"
        type="button"
        onClick={() => dispatch(fetchGreeting())}
      >
        Greet
      </button>
    </div>
  );
};

export default Greeting;
