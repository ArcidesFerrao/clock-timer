import React, { useEffect, useState } from 'react';
import Clock from './Clock';
import getCurrentTime from './functions/getCurrentTime';

export default function ClockApp() {
    const [time, setTime] = useState();

  useEffect(() => {
    // console.log(timeStamp);
      const interval = setInterval(() => {
          const currentTime = getCurrentTime;
          setTime(currentTime);        
      }, 1000);
      return () => clearInterval(interval);
  }, []);

  return (
        <section className="clock-app">
          <Clock number={time?.hr}/> 
          <Clock number={time?.min}/> 
          <Clock number={time?.s}/> 
        </section>
  )
}
