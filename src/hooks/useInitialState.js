import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToData = (payload) => {
    setState({
      ...state,
      data: [...state.data, payload],
    });
  };

  return {
    addToData,
    state,
  };
};

export default useInitialState;
