import { useRef, useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  function handleStart() {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  function handleReset() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
  }

  function formatTime(seconds) {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  }

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="container">
      <div className="stopwatch-card">
        <h1 className="title">Stopwatch</h1>
        <div className="time">{formatTime(time)}</div>

        <div className="buttons">
          <button  className="start" onClick={handleStart}>Start</button>
          <button className="stop" onClick={handleStop}>Stop</button>
          <button className="reset" onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
