import React, { useState, useEffect } from 'react';
import "./Timer.css"

const Timer = () => {
  const [time, setTime] = useState(0); 
  const [isRunning, setIsRunning] = useState(false);
  const [inputTime, setInputTime] = useState("");

  useEffect(() => {
    let a;
    if (isRunning && time > 0) {
      a = setInterval(() => {
        setTime(a => a - 1);
      }, 1000);
    } else if (time === 0 && isRunning) {
      alert("Timer finish");
      setIsRunning(false);
    }
    return () => clearInterval(a);
  }, [isRunning, time]);

  const handleStartPause = () => {
    if (!isRunning && inputTime) {
      setTime(parseInt(inputTime) * 60); 
      setInputTime('');
    }
    setIsRunning(!isRunning);
  };

  const handleInputChange = (e) => {
    setInputTime(e.target.value);
  };

  return (
    <div className='timer'>
      <input
        type="number"
        value={inputTime}
        onChange={handleInputChange}
        placeholder="Enter time"
        disabled={isRunning} />
      <h2 className="minutes" onClick={() => setIsRunning(false)}>
        {Math.floor(time / 60)}:{('0' + (time % 60)).slice(-2)} 
      </h2>
      <button onClick={handleStartPause}>
        {isRunning ? <b>Pause </b>: <b>Start</b>}
      </button>
    </div>
  );
}

export default Timer;