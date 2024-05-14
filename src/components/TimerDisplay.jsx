import React, { useState } from 'react';
import { useTimer } from "react-timer-hook";
import { Icon } from "@iconify-icon/react";
import { NavLink } from 'react-router-dom';



export default function TimerDisplay({ expiryTimestamp }) {
    const [expired, setExpired] = useState(false);

    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        restart,
        resume
    } = useTimer({ expiryTimestamp, autoStart: false, onExpire: () => setExpired(true) });
    // console.log(expiryTimestamp);
    
  return (
    <>
                <div className='timer-btn'>
                    <button className='start-btn tim' onClick={start} disabled={isRunning || expired } >Start</button>
                    <button className='start-btn tim' onClick={pause} disabled={!isRunning || expired } >Pause</button>
                    <button className='start-btn tim' onClick={resume} disabled={isRunning || expired } >Resume</button>
                </div>
                <div className='timer-display' >

                    <h1 className='minutes'>{minutes && minutes<10 || minutes==0 ? "0" + minutes : minutes }</h1>
                    <h2 className='seconds' >{seconds && seconds<10 || seconds==0 ? "0" + seconds : seconds }</h2>
                </div>
                <div className='timer-status' >
                    {expired ? <h4>Time Expired... <NavLink to="/timer" className="reset-btn" >reset</NavLink></h4> : "" }
                    {isRunning ? <Icon icon="iconoir:on-tag" width="2rem" height="2rem" /> : <Icon icon="iconoir:off-tag" width="2rem" height="2rem" />}
                </div>
            </>
  )
}
