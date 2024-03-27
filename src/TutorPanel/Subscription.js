import React from 'react'


import { Link } from 'react-router-dom'
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap'
import { CiShare2 } from 'react-icons/ci'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { SiTypescript } from 'react-icons/si'
import { FaBars } from 'react-icons/fa6'
import './Subscription.css'
// import PricingCard from '../Components/PricingCard'

import App1 from '../App1'
const Subscription = () => {
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
            <Link to="/" style={{color:"black",marginLeft:"20px",textDecoration:"none"
                    ,fontSize:"18px"}}>Subscription</Link>

            </Dropdown.Menu>
          </Dropdown>



          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li class="nav-item">
                  <Link to="/" className="nav-link nav-link1">Home</Link>
                </li>
                <li class="nav-item">
                  <Link to="/" className="nav-link nav-link1">Student</Link>
                </li>
                <li class="nav-item">
                  <Link to="/" className="nav-link nav-link1">Calendar</Link>
                </li>
                <li class="nav-item">
                  <Link to="/" className="nav-link nav-link1"> Online Material</Link>
                </li>
                <li class="nav-item">
                  <Link to="/" className="nav-link nav-link1">Expenses & Revenue</Link>
                </li>
                <li class="nav-item">
                  <Link to="/" className="nav-link nav-link1">Quiz</Link>
                </li>
                <li class="nav-item">
                  <Link to="/" className="nav-link nav-link1">Exam Features</Link>
                </li>
                <li class="nav-item">
                  <Link to="/" className="nav-link nav-link1">Announcements</Link>
                </li>
                <li class="nav-item">
                  <Link to="/" className="nav-link nav-link1"> Website</Link>
                </li>
                <li class="nav-item">
                  <Link to="/" className="nav-link nav-link1">Business Report</Link>
                </li>
            </ul>
          </div>
        </nav>
      </div>
      <div class="container-fluid">
        <div class="row">
          <nav class="col-md-2 d-none d-md-block bg-light sidebar">
            <div class="sidebar-sticky">
              <ul class="nav flex-column text-white">
                <li class="nav-item">
                  <Link to="/" className="navlinkjh nav-link mb-4"> <img src='./img/tutordash.png' className="logoimgy " /><span className='tutorl0go'>Tutor Octopus</span></Link>
                </li>
                <li class="nav-item">
                  <Link to="/" className="navlinkjh nav-link"><img src="./img/home.png" className="logoimgy1 " />Home</Link>
                </li>
                <li class="nav-item">
                  <Link to="/" className="navlinkjh nav-link"><img src="./img/student1.png" className="logoimgy1 " />Student</Link>
                </li>
                <li class="nav-item">
                  <Link to="/" className="navlinkjh nav-link"> <img src="./img/Calendar.png" className="logoimgy1 " />Calendar</Link>
                </li>
                <li class="nav-item">
                  <Link to="/" className="navlinkjh nav-link"><img src="./img/OnlineMaterial.png" className="logoimgy1 " /> Online Material</Link>
                </li>
                <li class="nav-item">
                  <Link to="/" className="navlinkjh nav-link"><img src="./img/Expenses.png" className="logoimgy1 " />Expenses & Revenue</Link>
                </li>
                <li class="nav-item">
                  <Link to="/" className="navlinkjh nav-link"><img src="./img/Quiz.png" className="logoimgy1 " />Quiz</Link>
                </li>
                <li class="nav-item">
                  <Link to="/" className="navlinkjh nav-link"><img src="./img/ExamFeatures.png" className="logoimgy1 " />Exam Features</Link>
                </li>
                <li class="nav-item">
                  <Link to="/" className="navlinkjh nav-link"><img src="./img/Announcements.png" className="logoimgy1 " />Announcements</Link>
                </li>
                <li class="nav-item">
                  <Link to="/" className="navlinkjh nav-link"><img src="./img/Website.png" className="logoimgy1 " /> Website</Link>
                </li>
                <li class="nav-item">
                  <Link to="/" className="navlinkjh nav-link"><img src="./img/BusinessReport.png" className="logoimgy1 " />Business Report</Link>
                </li>
              </ul>
            </div>
          </nav>

          <main role="main" class="col-md-9 col-lg-10 ">
            <Navbar className="bg-body-tertiaryb desktop1">
              <Container>
                <Navbar.Brand className='subscrip'>Subscription</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">

                  <Navbar.Text>
                    <CiShare2 className='share1' /> <IoIosNotificationsOutline className='share1' />
                    {/* <SiTypescript className='share2' /> */}
                    {/* <img src='./img/Typescript_logo_2020.png' width={30}/> */}
                    <span className='tst'>TS</span>
                  </Navbar.Text>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <FaBars className='share3' />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Link to="/" style={{color:"black",marginLeft:"20px",textDecoration:"none"
                    ,fontSize:"18px"}}>Subscription</Link>

                    </Dropdown.Menu>
                  </Dropdown>

                </Navbar.Collapse>
              </Container>
            </Navbar>
            <div class="dashboard-header px-md-4">
              {/* <h1 class="h2">Dashboard</h1> */}
              <p style={{ textAlign: "center" }}>Switch the toggle to change between Monthly and Annually </p>
              <App1 />


            </div>



          </main>
        </div>



      </div>
    </div>
  )
}
export default Subscription


