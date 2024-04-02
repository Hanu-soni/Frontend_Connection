
import { Link } from 'react-router-dom'


import {IoMdArrowDropdown } from 'react-icons/io'
import { Card, Dropdown} from 'react-bootstrap'

import MobilemenuNavbar from '../SideNavbar/MobilemenuNavbar'
import Sidenavbar from '../SideNavbar/Sidenavbar'
import TopBar from '../SideNavbar/TopBar'


const Announcements = ({userData}) => {
    console.log(userData);
    return (
        <div>
           <MobilemenuNavbar userData={userData} />
      <div class="container-fluid">
        <div class="row">
          <nav class="col-md-3 d-none d-md-block bg-light sidebar">
            <Sidenavbar/>
          </nav>
          <main role="main" class="col-md-8 col-lg-9 sidebar5">
            <TopBar userData={userData} />
                        <div class="dashboard-header px-md-4" > 
                            {/* <h1 class="h2">Dashboard</h1> */}
                            <Card className='addnewcard1'>

                                <Card.Body className='addstutnet1'>
                                    <img src='./img/sound.png' className='addstutnet3' />
                                    <h5 className='text-center mb-4 ' style={{ marginTop: "-20px" }}>You don't have any Announcements</h5>
                                   
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic" className='addnewdg8 addnewdg11 '>
                                            <span className='adggsh '>Add Announcements  <IoMdArrowDropdown className="IoMdArrowDropdown1" style={{ fontSize: "26px" }} /></span>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className='menu87'>
                                            <Link to="/" style={{
                                                color: "black", marginLeft: "10px", textDecoration: "none"
                                                , fontSize: "16px"
                                            }}>Add Announcements</Link>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Card.Body>
                            </Card>

                        </div>



                    </main>
                </div>



            </div>
        </div>
    )
}

export default Announcements

