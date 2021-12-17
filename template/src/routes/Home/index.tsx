import React from 'react';
import { Button } from 'antd';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { decrement, increment } from '../../store/slices/counter.slice';

const Home = function () {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div className="Home">
      <p>Home works!</p>
      <div>
        <Button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </Button>
        <span>{count}</span>
        <Button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default Home;
