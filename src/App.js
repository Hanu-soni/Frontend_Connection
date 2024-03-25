import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import About from './Components/About';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Dashboard';
import DashboardHome from './Component/DashboardHome';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Dashboard' element={<Dashboard/>} />
        <Route path='/DashboardHome' element={<DashboardHome/>} />
       
      </Routes>
      <ToastContainer/>
    
      
    </div>
  );
}

export default App;