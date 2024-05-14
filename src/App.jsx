import { useEffect, useState } from 'react';
import './App.css';
import getCurrentTime from './components/functions/getCurrentTime';
import Clock from './components/Clock';
import Timer from './components/Timer';
import { NavLink, Outlet } from 'react-router-dom';

function App() {
  const [type, setType] = useState(true);

  

  const [time, setTime] = useState();

  useEffect(() => {
    // console.log(timeStamp);
      const interval = setInterval(() => {
          const currentTime = getCurrentTime;
          setTime(currentTime);        
      }, 1000);
      return () => clearInterval(interval);
  }, []);

  const handleSwitch = () => {
    setType(!type);
    // console.log("show Timer" + type);
  }

  // const handleCountdown = () => {
    // const timeStamp = new Date();
    // timeStamp.setSeconds(timeStamp.getSeconds() + 300);

  

  return (
    <>

      <Outlet />

      <nav className='select-button' >
        <NavLink to="/" className="nav-link" >Clock</NavLink>
        <NavLink to="/timer" className="nav-link" >Timer</NavLink>
      </nav>
    
    </>


  );
}

export default App;
