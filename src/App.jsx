import { useRef, useState } from 'react'


function App() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  function handleTime() {
    //small edge case 

    if (intervalRef.current != null) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setTime(time => time + 1);
    }, 1000);
  }

  function handleInterval() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;

  }
  function handleReset() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
  }

  return (
    <>
      <h1>Stop Watch Timer {time}</h1>

      <button onClick={handleTime}>Start</button>
      <button onClick={handleInterval}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default App;
