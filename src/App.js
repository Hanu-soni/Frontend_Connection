
import './App.css';
import { Route, Routes } from 'react-router-dom';

// import About from './Components/Features';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Subscription from './TutorPanel/Subscription';

import Testings from './TutorPanel/Testings';
import Home from './TutorPanel/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Student from './TutorPanel/Student';
import { useState } from 'react';
// import Calendar from './TutorPanel/Calendar';
import AddNewStudent from './TutorPanel/AddNewStudent';
import OnlineResources from './TutorPanel/OnlineResources';
import UploadFiles from './TutorPanel/UploadFiles';
import BusinessTutor from './BusinessTutor/BusinessTutor';
import Student_Redirect from './TutorPanel/Student_Redirect/Student_Redirect';
import Expenses_Revenue from './TutorPanel/Expenses_Revenue/Expenses_Revenue';
import ExamFeatures from './TutorPanel/ExamFeatures/ExamFeatures';
import TopBar from './TutorPanel/SideNavbar/TopBar';
import Landing from './Components/Landing';
import Quiz from './TutorPanel/Quiz/Quiz';


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
        <Route path='/' element={<Landing />} />
        {/* <Route path='/About' element={<About />} /> */}
        <Route path='/Login' element={<Login onLogin={handleLogin}/>} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Subscription' element={<Subscription />} />

        <Route path='/Testings' element={<Testings />} />
        {/* <div>
        <topnavbar/>
        <Routes>....</Routes>
        </div> */}
       {userData && <Route path='/Home'  element={<Home userData={userData} />} />}
        {/* <Route path='/TutorHome'  element={<TutorHome />} /> */}
        {userData &&<Route path='/Student' element={<Student userData={userData}/>} />}
        {/* <Route path='/Calendar' element={<Calendar/>} /> */}
         <Route path='/AddNewStudent' element={<AddNewStudent/>} />
         {userData &&<Route path='/OnlineResources' element={<OnlineResources userData={userData}/>} />}
         <Route path='/UploadFiles' element={<UploadFiles/>}/>
         {  <Route path='/TopBar' element={<TopBar/>}/>}
        
          
         
         <Route path='/BusinessTutor' element={<BusinessTutor/>}/>
         {userData &&<Route path='/Student_Redirect' element={<Student_Redirect userData={userData}/>}/>}
         {userData &&  <Route path='/Expenses_Revenue' element={<Expenses_Revenue userData={userData}/>}/>}
         {userData &&  <Route path='/ExamFeatures' element={<ExamFeatures userData={userData}/>}/>}
         {userData &&  <Route path='/Quiz' element={<Quiz userData={userData}/>}/>}
          
      </Routes>
      
      <ToastContainer/>


    </div>
  );
}

export default App;
