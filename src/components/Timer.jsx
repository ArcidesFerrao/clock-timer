import React, { useEffect, useState } from 'react';
import TimerDisplay from './TimerDisplay';
import { Icon } from "@iconify-icon/react";



export default function Timer() {

    const [starter, setStarter] = useState(true);
    const [entry, setEntry] = useState("");
    const [option, setOption] = useState(60);    
    const [timestamp, setTimestamp] = useState(new Date());

    const handleSetter = (event) => {
        event.preventDefault();
        setTimestamp(new Date());
        if (entry === "5") {
            setOption(timestamp.setSeconds(timestamp.getSeconds() + 301));
        } else if (entry === "15") {
            setOption(timestamp.setSeconds(timestamp.getSeconds() + 901));
        } else {
            setOption(timestamp.setSeconds(timestamp.getSeconds() + 61));
        }

        console.log("option set: " + option);
        console.log("timestamp set: " + timestamp);
        setStarter(!starter);
    }
    
    const handleChange = (event) => {
        event.preventDefault();
        setEntry(event.target.value);
        setTimestamp(new Date());

        console.log("timestamp change: " + timestamp);
        console.log("entry change: " + timestamp);
    }
    
    const handleStarter = () => {
        setStarter(!starter);
        setEntry("");
        
    }

  return (
    <div className='timer-app'>

        { 
          starter && starter ? 
            <form className='set-minutes' onSubmit={handleSetter} >
                <fieldset>
                    <legend>Set minutes</legend>
                    <div className="radio-btn">
                        <div className="radio">
                            <input type="radio" id="one" value="1" name="min" checked={entry === "1"} onChange={handleChange} />
                            <label htmlFor="one">1 min</label>
                        </div>
                        <div className="radio">
                            <input type="radio" id="five" value="5" name="min" checked={entry === "5"} onChange={handleChange} />
                            <label htmlFor="five">5 min</label>
                        </div>
                        <div className="radio">
                            <input type="radio" id="fifteen" value="15" name="min" checked={entry === "15"} onChange={handleChange} />
                            <label htmlFor="fifteen">15 min</label>
                        </div>
                    </div>
                    {/* <input className='minutes' value={entry} onChange={(event) => setEntry(event.target.value)} type='number' placeholder='00' max={59} min={1} step={0} /> */}
                    <div className="submit-btn">
                        <input type='submit' className='start-btn'  value="Set"/>
                    </div>
                </fieldset>
            </form> 



            :
            <>
            <TimerDisplay expiryTimestamp={option} />
            <button className='set-back' onClick={handleStarter} ><Icon icon="ep:back" width="1rem" height="1rem" /></button>
            </>
        }
    </div>
  )
}
