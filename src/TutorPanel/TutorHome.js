import React from 'react'


import { Col, Container, Row } from 'react-bootstrap'

import { Dropdown, Navbar } from 'react-bootstrap'

import { CiShare2 } from 'react-icons/ci'
import { IoIosNotificationsOutline } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaBars } from 'react-icons/fa'

import './Dash.css'
import App1 from '../App1';
import { Link, useLocation } from 'react-router-dom';

const TutorHome = () => {

  const location = useLocation();
    // Accessing the data passed during navigation
    const userData= location.state;
    console.log(userData);


  return (
    <div>
      <div className='desktop13'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light debhh fixed-top" >
          <a className="navbar-brand" href="#">Home</a>

          <CiShare2 className='share1' /> <IoIosNotificationsOutline className='share1' />
          <span className='tst'>TS</span>


          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <FaBars className='share3' />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Link to="/" style={{
                color: "black", marginLeft: "20px", textDecoration: "none"
                , fontSize: "18px"
              }}>Subscription</Link>

            </Dropdown.Menu>
          </Dropdown>



          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
           
                <li className="nav-item">
                  <Link to="/" className="nav-link nav-link1">Student</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link nav-link1">Calendar</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link nav-link1"> Online Material</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link nav-link1">Expenses & Revenue</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link nav-link1">Quiz</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link nav-link1">Exam Features</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link nav-link1">Announcements</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link nav-link1"> Website</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link nav-link1">Business Report</Link>
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
                  <Link to="/" className="navlinkjh nav-link mb-4"> <img src='./img/tutordash.png' className="logoimgy " /><span className='tutorl0go'>Tutor Octopus</span></Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="navlinkjh nav-link"><img src="./img/home.png" className="logoimgy1 " />Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="navlinkjh nav-link"><img src="./img/student1.png" className="logoimgy1 " />Student</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="navlinkjh nav-link"> <img src="./img/Calendar.png" className="logoimgy1 " />Calendar</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="navlinkjh nav-link"><img src="./img/OnlineMaterial.png" className="logoimgy1 " /> Online Material</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="navlinkjh nav-link"><img src="./img/Expenses.png" className="logoimgy1 " />Expenses & Revenue</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="navlinkjh nav-link"><img src="./img/Quiz.png" className="logoimgy1 " />Quiz</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="navlinkjh nav-link"><img src="./img/ExamFeatures.png" className="logoimgy1 " />Exam Features</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="navlinkjh nav-link"><img src="./img/Announcements.png" className="logoimgy1 " />Announcements</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="navlinkjh nav-link"><img src="./img/Website.png" className="logoimgy1 " /> Website</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="navlinkjh nav-link"><img src="./img/BusinessReport.png" className="logoimgy1 " />Business Report</Link>
                </li>
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
                    <span className='tst'>TS</span>

                  </Navbar.Text>

                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <FaBars className='share3' />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Link to="/" style={{
                        color: "black", marginLeft: "20px", textDecoration: "none"
                        , fontSize: "18px"
                      }}>Subscription</Link>

                    </Dropdown.Menu>
                  </Dropdown>

                </Navbar.Collapse>

              </Container>

            </Navbar>

            <div className="dashboard-header px-md-4">
              <h1 className="h2">Lets get Started, {userData.user}</h1>



              <Row>

                <Col sm={12}>
                  <div className="container bnnbcon scrollb">
                    <div className="progress-container ">
                      <div className="progress" id="progress"></div>
                      <div ><img src='./img/createaccount.png' className="circle active" width={90} /> Create Account</div>

                      <div ><img src='./img/student1.png' className="circle" width={90} style={{ width: "80px", padding: "px" }} />  Add Student</div>
                      <div ><img src='./img/Calendar.png' className="circle " width={90} />Schedule Event</div>
                      <div ><img src='./img/img7.png' className="circle " width={90} /> You have got it</div>

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
                <p className='text-center my-4' style={{ color: "black", fontWeight: "700" }}>There's nothing on your schedule for 28-02-2024</p>
              </div>



            </div>



          </main>
        </div>



      </div>

    </div>
  )
}

export default TutorHome