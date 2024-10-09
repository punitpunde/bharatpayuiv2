import React, { useState, useEffect } from 'react';
import "./countdownTimer.css"
import { useNavigate } from 'react-router-dom';
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(30); // 5 minutes in seconds
  const nav = useNavigate()
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(interval); // Stop the timer when it reaches zero
        //   nav("/")
          return 0;
        }
        return prevTime - 1; // Decrement time left by 1 second
      });
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const formatTime = (timeInSeconds) => {
    const minutes = String(Math.floor(timeInSeconds / 60)).padStart(2, '0');
    const seconds = String(timeInSeconds % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="countdown-timer">
      <h4>Time left to complete the transaction:</h4>
      <div className="timer-display">
        {formatTime(timeLeft)}
      </div>
    </div>
  );
}

export default CountdownTimer;
