import React from "react";
import BingoGame from "./components/BingoGame";
import LastNumberCalled from "./components/LastNumberCalled";
import CallHistory from "./components/CallHistory";
import BingoActions from "./components/BingoActions";
import CalledNumbers from "./components/CalledNumbers";

function App() {
  return (
    <div className="App">
      <BingoGame>
        <LastNumberCalled />
        <BingoActions className="actions" />
        <CalledNumbers className="called" />
        <CallHistory />
      </BingoGame>
    </div>
  );
}

export default App;
