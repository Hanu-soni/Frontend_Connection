import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { CiShare2 } from 'react-icons/ci'
import { IoIosNotificationsOutline } from 'react-icons/io'
import './Topbar.css'
import { Link, useLocation } from 'react-router-dom'
// import Top from './Top'
// import Home from '../Home'

const TopBar = ({userData}) => {
  //PANKAJ--->PAN---(0,3)

  const location=useLocation();
  console.log(location);
  console.log(userData)
  return (
    <div>
      <Navbar className="bg-body-tertiaryb desktop1">
        <Container>
          <Navbar.Brand className='subscrip'>
            {location.pathname.slice(1)}
          </Navbar.Brand>
      {/* <Home /> */}
          
         
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">

            <Navbar.Text>
              <CiShare2 className='share1' /> <IoIosNotificationsOutline className='share1' />

              <span className='tst'>{userData.firstName[0]+userData.lastName[0]}</span>
            </Navbar.Text>

            <Link to='/Subscription' className='Subscribe'>Subscribe </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </div>
  )
}

export default TopBar