
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
import Student from './TutorPanel/Student';
import { useState } from 'react';
// import Calendar from './TutorPanel/Calendar';
import AddNewStudent from './TutorPanel/AddNewStudent';
import OnlineResources from './TutorPanel/OnlineResources';
import UploadFiles from './TutorPanel/UploadFiles';

function App() {


  const [userData, setUserData] = useState({
    user:"",
    token:"",
    firstName:"",
    lastName:""

  });

  // Function to receive response data from Login component
  const handleLogin = (data) => {
      setUserData(data);
  };
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/About' element={<About />} /> */}
        <Route path='/Login' element={<Login onLogin={handleLogin}/>} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Subscription' element={<Subscription />} />

        <Route path='/Testings' element={<Testings />} />
       {userData && <Route path='/TutorHome'  element={<TutorHome userData={userData} />} />}
        <Route path='/Student' element={<Student/>} />
        {/* <Route path='/Calendar' element={<Calendar/>} /> */}
         <Route path='/AddNewStudent' element={<AddNewStudent/>} />
         <Route path='/OnlineResources' element={<OnlineResources/>}/>
         <Route path='/UploadFiles' element={<UploadFiles/>}/>

      </Routes>
      
      <ToastContainer/>


    </div>
  );
}

export default App;
