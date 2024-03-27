
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';

// import About from './Components/Features';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Subscription from './TutorPanel/Subscription';

import Testings from './TutorPanel/Testings';
import TutorHome from './TutorPanel/TutorHome';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/About' element={<About />} /> */}
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Subscription' element={<Subscription />} />

        <Route path='/Testings' element={<Testings />} />
        <Route path='/TutorHome' element={<TutorHome />} />
      </Routes>
      <ToastContainer/>


    </div>
  );
}

export default App;
