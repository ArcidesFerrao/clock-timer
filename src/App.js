import './App.css';
import { NavLink, Outlet } from 'react-router-dom';

function App() {

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
