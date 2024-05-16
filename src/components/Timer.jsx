import React, { useEffect, useState } from 'react';
import TimerDisplay from './TimerDisplay';
import { Icon } from "@iconify-icon/react";



export default function Timer() {

    const [starter, setStarter] = useState(true);
    const [entry, setEntry] = useState("");
    const [option, setOption] = useState(60);    
    const [timestamp, setTimestamp] = useState();
    // setTimestamp(new Date());
    
    const handleStarter = () => {
        setStarter(!starter);
        setEntry("");
        
    }
    
    const handleOne = () => {
        const timeS = new Date();
        // event.preventDefault();
        setOption(timeS.setSeconds(timeS.getSeconds() + 60));
       
        setStarter(!starter);
    }
    const handleFive = () => {
        const timeS = new Date();
        // event.preventDefault();
        setOption(timeS.setSeconds(timeS.getSeconds() + 300));
       
        setStarter(!starter);
    }

    const handleMax = () => {
        const timeS = new Date();
        // event.preventDefault();
        setOption(timeS.setSeconds(timeS.getSeconds() + 900));
       
        setStarter(!starter);
    }

  return (
    <div className='timer-app'>

        { 
          starter && starter ? 
          <>
            <div className='option-btns' >
                <button onClick={handleOne} >1 min</button>
                <button onClick={handleFive} >5 min</button>
                <button onClick={handleMax}  >15 min</button>
            </div>
          </>
            :
            <>
            <TimerDisplay expiryTimestamp={option} />
            <button className='set-back' onClick={handleStarter} ><Icon icon="ep:back" width="1rem" height="1rem" /></button>
            </>
        }
    </div>
  )
}
