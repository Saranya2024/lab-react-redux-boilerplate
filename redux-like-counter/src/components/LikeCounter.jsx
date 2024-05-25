import React, { useState, useEffect } from 'react';
import { createStore } from 'redux';
import reducer from './Reducer';
import { incrementLike, decrementLike } from './Actions';

const store = createStore(reducer);

const LikeCounter = () => {
  const [likeCount, setLikeCount] = useState(store.getState().likeCount);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => setLikeCount(store.getState().likeCount));
    return () => unsubscribe();
  }, []);

  const handleIncrement = () => store.dispatch(incrementLike());
  const handleDecrement = () => store.dispatch(decrementLike());

  return (
    <div>
      <h2>{likeCount}</h2>
      <button onClick={handleIncrement}>Like</button>
      <button onClick={handleDecrement}>Unlike</button>
    </div>
  );
};

export default LikeCounter;
