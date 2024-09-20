//time.jsx

import {useState, useRef} from 'react';


function Timer() {
  const [seconds, setSeconds] = useState(0);
  const timeRef = useRef(null);

  const startTimer = () => {
    if  (timeRef.current) return; // 이미 타이머가 실행 중이면 중복 실행 방지
   timeRef.current = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval (timeRef.current);
   timeRef.current = null;
  };

  const resetTimer = () => {
    clearInterval (timeRef.current);
   timeRef.current = null;
    setSeconds(0);
  };

  return (
    <div>
      <h3>타이머: {seconds}초</h3>
      <button onClick={startTimer}>시작</button>
      <button onClick={stopTimer}>정지</button>
      <button onClick={resetTimer}>초기화</button>
    </div>
  );
}

export default Timer;