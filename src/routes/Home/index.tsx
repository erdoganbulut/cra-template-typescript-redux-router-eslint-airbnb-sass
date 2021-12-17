import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { decrement, increment } from '../../store/slices/counter.slice';

const Home = function () {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div className="Home">
      <p>Home works!</p>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Home;
