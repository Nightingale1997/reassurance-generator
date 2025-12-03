import { useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import "./App.css";

function App() {
  const [party, setParty] = useState(false);
  const { width, height } = useWindowSize();
  let audio = new Audio("/celebration.mp3");
  const start = () => {
    audio.play();
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          {!party ? (
            <>
              <p>Does he still love you?</p>
              <div
                style={{
                  borderRadius: "10px",
                  padding: 10,
                  background: "green",
                  cursor: "pointer",
                }}
                onClick={() => {
                  start();
                  setParty(true);
                }}
              >
                Click to Find Out
              </div>
            </>
          ) : (
            <>
              <h1>Yes I love you, Aurie!!!</h1>
            </>
          )}
        </header>
      </div>
      {party && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: width,
            height: height,
          }}
        >
          <Confetti width={width} height={height} />
        </div>
      )}
    </>
  );
}

export default App;
