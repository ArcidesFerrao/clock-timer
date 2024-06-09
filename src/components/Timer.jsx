import { useState } from 'react';
import TimerDisplay from './TimerDisplay';
import { Icon } from "@iconify-icon/react";



export default function Timer() {

    const [starter, setStarter] = useState(true);
    const [option, setOption] = useState(60);    
    
    const handleStarter = () => {
        setStarter(!starter);
    }
    
    const handleOne = () => {
        const timeS = new Date();
        setOption(timeS.setSeconds(timeS.getSeconds() + 60));
       
        setStarter(!starter);
    }
    const handleFive = () => {
        const timeS = new Date();
        setOption(timeS.setSeconds(timeS.getSeconds() + 300));
       
        setStarter(!starter);
    }

    const handleMax = () => {
        const timeS = new Date();
        setOption(timeS.setSeconds(timeS.getSeconds() + 900));
       
        setStarter(!starter);
    }

  return (
    <div className='timer-app'>
      <div className="timer-title">
        <h2>Timer</h2>
      </div>
        { 
          starter && starter ? 
          <>

            <div className='option-btns' >
                <button className='start-btn'  onClick={handleOne} >1 min</button>
                <button className='start-btn' onClick={handleFive} >5 min</button>
                <button className='start-btn' onClick={handleMax}  >15 min</button>
            </div>
          </>
            :
            <div className='dis-timer'>
              <TimerDisplay expiryTimestamp={option} />
              <button className='set-back' onClick={handleStarter} ><Icon icon="ep:back" width="1rem" height="1rem" /></button>
            </div>
        }
    </div>
  )
}
