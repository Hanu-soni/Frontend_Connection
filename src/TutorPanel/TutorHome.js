import React, { useState } from 'react'


import { Col, Container, Row, Modal, Button } from 'react-bootstrap'

import { Dropdown, Navbar } from 'react-bootstrap'

import { CiShare2 } from 'react-icons/ci'
import { IoIosNotificationsOutline } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaBars } from 'react-icons/fa'

import './Dash.css'
import App1 from '../App1';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const TutorHome = ({ userData }) => {



  // const location = useLocation();
  // // Accessing the data passed during navigation
  // const userData = location.state;
  // const firstName = userData && userData.firstName ? userData.firstName : '';
  // const lastName = userData && userData.lastName ? userData.lastName : '';
  //console.log(userData);
  // console.log(userData.name[0])
  //  const IconName = userData && userData.name && userData.name.length > 0 ? userData.name[0] : '';
  const navigate = useNavigate();
  const [showModalLogout, setShowModalLogout] = useState(false);

  const handleLogout = () => {
    setShowModalLogout(true);
  };

  const handleClose = () => {
    setShowModalLogout(false);
  };

  const handleConfirmLogout = () => {
    // Handle logout here
    setShowModalLogout(false);
    sessionStorage.removeItem('token');
    navigate('/Login')

  };
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US');
  //console.log(formattedDate);



  return (
    <div>
      <div className='desktop13'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light debhh fixed-top" >
          <a className="navbar-brand">Home</a>

          <CiShare2 className='share1' /> <IoIosNotificationsOutline className='share1' />
          <span className='tst'>{userData.firstName[0]}</span>


          {/* <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <FaBars className='share3' />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Link to="/" style={{
              color: "black", marginLeft: "20px", textDecoration: "none"
              , fontSize: "18px"
            }}>Subscription</Link>

          </Dropdown.Menu>
        </Dropdown> */}



          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

              <li className="nav-item">
                <Link to="/Student" className="nav-link nav-link1">Student</Link>
              </li>
              <li className="nav-item">
                <p to="/" className="nav-link nav-link1">Calendar</p>
              </li>
              <li className="nav-item">
                <p to="/" className="nav-link nav-link1"> Online Material</p>
              </li>
              <li className="nav-item">
                <p to="/" className="nav-link nav-link1">Expenses & Revenue</p>
              </li>
              <li className="nav-item">
                <p to="/" className="nav-link nav-link1">Quiz</p>
              </li>
              <li className="nav-item">
                <p to="/" className="nav-link nav-link1">Exam Features</p>
              </li>
              <li className="nav-item">
                <p to="/" className="nav-link nav-link1">Announcements</p>
              </li>
              <li className="nav-item">
                <p to="/" className="nav-link nav-link1"> Website</p>
              </li>
              <li className="nav-item">
                <p to="/" className="nav-link nav-link1">Business Report</p>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column text-white">
                <li className="nav-item">
                  <p className="navlinkjh nav-link mb-4"> <img src='./img/tutordash.png' className="logoimgy " /><span className='tutorl0go'>Tutor Octopus</span></p>
                </li>
                <li className="nav-item">
                  {/* //need to change to link */}
                  <Link to='/TutorHome' className="navlinkjh nav-link"><img src="./img/home.png" className="logoimgy1 " />Home</Link>
                </li>
                <li className="nav-item">
                  {/* //need to change to link */}
                  <Link to="/Student" className="navlinkjh nav-link"><img src="./img/student1.png" className="logoimgy1 " />Student</Link>
                </li>
                <li className="nav-item">
                  <p to="#" className="navlinkjh nav-link"> <img src="./img/Calendar.png" className="logoimgy1 " />Calendar</p>
                </li>
                <li className="nav-item">
                  <p to="#" className="navlinkjh nav-link"><img src="./img/OnlineMaterial.png" className="logoimgy1 " /> Online Material</p>
                </li>
                <li className="nav-item">
                  <p to="#" className="navlinkjh nav-link"><img src="./img/Expenses.png" className="logoimgy1 " />Expenses & Revenue</p>
                </li>
                <li className="nav-item">
                  <p to="#" className="navlinkjh nav-link"><img src="./img/Quiz.png" className="logoimgy1 " />Quiz</p>
                </li>
                <li className="nav-item">
                  <p to="#" className="navlinkjh nav-link"><img src="./img/ExamFeatures.png" className="logoimgy1 " />Exam Features</p>
                </li>
                <li className="nav-item">
                  <p to="#" className="navlinkjh nav-link"><img src="./img/Announcements.png" className="logoimgy1 " />Announcements</p>
                </li>
                <li className="nav-item">
                  <p to="#" className="navlinkjh nav-link"><img src="./img/Website.png" className="logoimgy1 " /> Website</p>
                </li>
                <li className="nav-item">
                  <p to="#" className="navlinkjh nav-link"><img src="./img/BusinessReport.png" className="logoimgy1 " />Business Report</p>
                </li>
                <li className="nav-item">
                  <button onClick={handleLogout} className="navlinkjh nav-link"><img src="./img/BusinessReport.png" className="logoimgy1 " />Log-Out</button>
                </li>
                <Modal show={showModalLogout} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Logout</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Are you sure you want to log out?</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      No
                    </Button>
                    <Button variant="primary" onClick={handleConfirmLogout}>
                      Yes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </ul>
            </div>
          </nav>

          <main role="main" className="col-md-9 col-lg-10 ">
            <Navbar className="bg-body-tertiaryb desktop1">
              <Container>
                <Navbar.Brand className='subscrip'>Home</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">

                  <Navbar.Text>
                    <CiShare2 className='share1' /> <IoIosNotificationsOutline className='share1' />
                    <span className='tst'>{userData.firstName[0] + userData.lastName[0]}</span>

                  </Navbar.Text>

                  {/* <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <FaBars className='share3' />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Link to="/" style={{
                      color: "black", marginLeft: "20px", textDecoration: "none"
                      , fontSize: "18px"
                    }}>Subscription</Link>

                  </Dropdown.Menu>
                </Dropdown> */}

                </Navbar.Collapse>

              </Container>

            </Navbar>

            <div className="dashboard-header px-md-4">
              <h4 className="">Lets get Started, {userData.firstName}</h4>



              <Row>

                <Col sm={12}>
                  <div className="container bnnbcon scrollb">
                    <div className="progress-container ">
                      <div className="progress" id="progress"></div>
                      <div ><img src='./img/createaccount.png' className="circle1 active" width={0} /> <span className='create5'>Create Account</span></div>

                      <div ><img src='./img/des1.png' className="circle nn" width={90} />  <span className='create5'>Add Student</span> </div>
                      <div ><img src='./img/des2.png' className="circle " width={90} /> <span className='create5'>Schedule Event</span> </div>
                      <div ><img src='./img/des3.png' className="circle " width={90} /> <span className='create5'> You have got it</span> </div>

                    </div>

                  </div>

                </Col>

              </Row>


              <div className="container bkkcon">

                <div className="row mt-5 mt-md-3 row-cols-2 row-cols-sm-1 row-cols-md-4 justify-content-center">
                  <div className="col">
                    <div className="service-card">
                      <div className="icon-wrapper">
                        <img src='./img/Calendar.png' className='imhhg' />
                      </div><h5 className='text-center text-white my-3'>0</h5>
                      <p className='text-center text-white'>
                        Events left this<br></br> week
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="service-card">
                      <div className="icon-wrapper">
                        <img src='./img/mon.png' className='imhhg1' />
                      </div><h5 className='text-center text-white my-3'>0</h5>
                      <p className='text-center text-white'>
                        Payment received<br></br> this month
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="service-card">
                      <div className="icon-wrapper">
                        <img src='./img/price.png' className='imhhg2' />
                      </div><h5 className='text-center text-white my-3'>RS.00.0</h5>
                      <p className='text-center text-white'>
                        Projected Revenue<br></br> this month
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="service-card">
                      <div className="icon-wrapper">
                        <img src='./img/user.png' className='imhhg3' />
                      </div><h5 className='text-center text-white my-3'>0</h5>
                      <p className='text-center text-white'>
                        Active Students
                      </p>
                    </div>
                  </div>

                </div>
              </div>
              <hr></hr>
              <div>
                <img src='./img/calendar.png' className='calender5' />
                <p className='text-center my-4' style={{ color: "black", fontWeight: "700" }}>There's nothing on your schedule for {formattedDate}</p>
              </div>



            </div>



          </main>
        </div>



      </div>

    </div>

  )
}

export default TutorHome