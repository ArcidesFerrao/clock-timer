import { useEffect, useState } from 'react';
import './App.css';
import getCurrentTime from './components/functions/getCurrentTime';
import { NavLink, Outlet } from 'react-router-dom';

function App() {

  const [time, setTime] = useState();

  useEffect(() => {
      const interval = setInterval(() => {
          const currentTime = getCurrentTime;
          setTime(currentTime);        
      }, 1000);
      return () => clearInterval(interval);
  }, []);

  return (
    <>

      <Outlet />

      <nav className='select-button' >
        <NavLink to="" className="nav-link" >Clock</NavLink>
        <NavLink to="timer" className="nav-link" >Timer</NavLink>
      </nav>
    
    </>


  );
}

export default App;
