import React, { useReducer } from "react";
import BingoContext from "./BingoContext";

var initialState = [];

function getRandomNumber(numbersCalled) {
  const bingoNumbers = [...Array(75).keys()].map(k => k + 1);
  const availableNumbers = bingoNumbers.filter(n => !numbersCalled.includes(n));
  const randomIndex = Math.floor(Math.random() * availableNumbers.length);
  return availableNumbers[randomIndex];
}

function bingoReducer(state, action) {
  switch (action) {
    case "call":
      if (state.length === 75) return state;
      return [getRandomNumber(state), ...state];
    case "reset":
      return initialState;
    default:
      throw new Error("unrecognized action");
  }
}

function BingoGame({ children }) {
  var [numbersCalled, dispatch] = useReducer(bingoReducer, initialState);

  const call = () => {
    dispatch("call");
  };

  const reset = () => {
    dispatch("reset");
  };

  return (
    <BingoContext.Provider value={[numbersCalled, { call, reset }]}>
      <div className="game">{children}</div>
    </BingoContext.Provider>
  );
}

export default BingoGame;
