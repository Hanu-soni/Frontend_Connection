import { Link, useNavigate } from 'react-router-dom'
import { Button, Card, Col, Container, Dropdown, Form, Modal, Nav, Navbar, Row, Tab, Tabs } from 'react-bootstrap'
import { CiShare2 } from 'react-icons/ci'
import { IoIosNotificationsOutline, IoMdArrowDropdown } from 'react-icons/io'

import { FaBars } from 'react-icons/fa6'
import './Subscription.css'
import { useEffect, useState } from 'react'
import './Student.css'
import MobilemenuNavbar from './SideNavbar/MobilemenuNavbar'
import Sidenavbar from './SideNavbar/Sidenavbar'
import TopBar from './SideNavbar/TopBar'

const Student = ({userData}) => {
    const [key, setKey] = useState('home');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(userData)

    const navigate=useNavigate();
    useEffect(()=>{
      if(!sessionStorage.getItem('token')){
        alert('YOU ARE NOT LOGGED IN! KINDLY LOGIN! CLICK OK BUTTON 2 TIMES');
        console.log("check")
        navigate('/Login')
        console.log("check")
      }
    },
      [])
    return (
        <div>
            <MobilemenuNavbar userData={userData} />

            <div class="container-fluid">
                <div class="row">
                    <nav class="col-md-3 d-none d-md-block bg-light sidebar">
                        <Sidenavbar />
                    </nav>
                    <main role="main" class="col-md-8 col-lg-9 sidebar5">
                        <TopBar userData={userData} />
                        <div class="dashboard-header px-md-4">
                            {/* <h1 class="h2">Dashboard</h1> */}


                            <Tabs
                                id="controlled-tab-example"
                                activeKey={key}
                                onSelect={(k) => setKey(k)}

                            >
                                <Tab eventKey="home" title="Home">
                                    <div >
                                        <Card className='addnewcard'>
                                            <Card.Header className='header56'>
                                                <main class="manu">
                                                    <article>  <Dropdown>
                                                        <Dropdown.Toggle variant="success" id="dropdown-basic" className='addnewdg'>
                                                            <span className='adggsh'>  Add New <IoMdArrowDropdown className="IoMdArrowDropdown1" style={{ fontSize: "26px" }} /></span>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu className='menu87'>
                                                            <Link to="/AddNewStudent" style={{
                                                                color: "black", marginLeft: "10px", textDecoration: "none"
                                                                , fontSize: "16px"
                                                            }}>Add New Student</Link>
                                                        </Dropdown.Menu>
                                                    </Dropdown></article>
                                                    {/* <article>   <Dropdown>
                                                        <Dropdown.Toggle variant="success" id="dropdown-basic" className='addnewdg1'>
                                                            <span className='adggsh'> Messaging <IoMdArrowDropdown className="IoMdArrowDropdown" style={{ fontSize: "26px" }} /></span>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu className='menu87'>
                                                            <Link to="/" style={{
                                                                color: "black", marginLeft: "10px", textDecoration: "none"
                                                                , fontSize: "16px"
                                                            }}>Add New Student</Link>
                                                        </Dropdown.Menu>
                                                    </Dropdown></article> */}
                                                    <article>   <Dropdown>
                                                        <Dropdown.Toggle variant="success" id="dropdown-basic" className='addnewdg2'>
                                                            <span className='adggsh'> Import Student <IoMdArrowDropdown className="IoMdArrowDropdown" style={{ fontSize: "26px" }} /></span>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu className='menu87'>
                                                            <Button variant="" onClick={handleShow} style={{ border: "none" }}>
                                                                Add Students Batch
                                                            </Button>

                                                        </Dropdown.Menu>
                                                    </Dropdown></article>


                                                </main>
                                                {/* <div class="container">
                                                    <div class="row">

                                                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2">
                                                            <div class="box1">

                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="success" id="dropdown-basic" className='addnewdg'>
                                                                        <span className='adggsh'>  Add New <IoMdArrowDropdown className="IoMdArrowDropdown1" style={{ fontSize: "26px" }} /></span>
                                                                    </Dropdown.Toggle>

                                                                    <Dropdown.Menu className='menu87'>
                                                                        <Link to="/" style={{
                                                                            color: "black", marginLeft: "10px", textDecoration: "none"
                                                                            , fontSize: "16px"
                                                                        }}>Add New Student</Link>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>

                                                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2">
                                                            <div class="box1">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="success" id="dropdown-basic" className='addnewdg1'>
                                                                        <span className='adggsh'> Messaging <IoMdArrowDropdown className="IoMdArrowDropdown" style={{ fontSize: "26px" }} /></span>
                                                                    </Dropdown.Toggle>

                                                                    <Dropdown.Menu className='menu87'>
                                                                        <Link to="/" style={{
                                                                            color: "black", marginLeft: "10px", textDecoration: "none"
                                                                            , fontSize: "16px"
                                                                        }}>Add New Student</Link>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>

                                                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2">
                                                            <div class="box1">

                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="success" id="dropdown-basic" className='addnewdg2'>
                                                                        <span className='adggsh'> Import Student <IoMdArrowDropdown className="IoMdArrowDropdown" style={{ fontSize: "26px" }} /></span>
                                                                    </Dropdown.Toggle>

                                                                    <Dropdown.Menu className='menu87'>
                                                                        <Button variant="" onClick={handleShow} style={{ border: "none" }}>
                                                                            Add Students Batch
                                                                        </Button>

                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>


                                                    </div>
                                                </div> */}

                                            </Card.Header>
                                            <Card.Body className='addstutnet1'>
                                                <img src='./img/addstutent.png' className='addstutnet' />
                                                <h5 className='text-center ' style={{ marginTop: "-20px" }}>You don't have any students yet</h5>
                                                <p className='text-center'>Add your students so you can take their attendance, and more.</p>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="success" id="dropdown-basic" className='addnewdg8 addnewdg11'>
                                                        <span className='adggshnn'>Add New <IoMdArrowDropdown className="IoMdArrowDropdown1" style={{ fontSize: "26px" }} /></span>
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu className='menu87'>
                                                        <Link to="/AddNewStudent" style={{
                                                            color: "black", marginLeft: "10px", textDecoration: "none"
                                                            , fontSize: "16px"
                                                        }}>Add New Student</Link>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </Card.Body>
                                        </Card>


                                    </div>
                                </Tab>
                                <Tab eventKey="profile" title="Batches">
                                    <div >
                                        <Card className='addnewcard'>
                                            <Card.Header className='header56'>
                                                <main class="manu">
                                                    <article>  <Dropdown>
                                                        <Dropdown.Toggle variant="success" id="dropdown-basic" className='addnewdg'>
                                                            <span className='adggsh'>  Add New <IoMdArrowDropdown className="IoMdArrowDropdown1" style={{ fontSize: "26px" }} /></span>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu className='menu87'>
                                                            <Link to="/AddNewStudent" style={{
                                                                color: "black", marginLeft: "10px", textDecoration: "none"
                                                                , fontSize: "16px"
                                                            }}>Add New Student</Link>
                                                        </Dropdown.Menu>
                                                    </Dropdown></article>
                                                    {/* <article>   <Dropdown>
                                                        <Dropdown.Toggle variant="success" id="dropdown-basic" className='addnewdg1'>
                                                            <span className='adggsh'> Messaging <IoMdArrowDropdown className="IoMdArrowDropdown" style={{ fontSize: "26px" }} /></span>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu className='menu87'>
                                                            <Link to="/" style={{
                                                                color: "black", marginLeft: "10px", textDecoration: "none"
                                                                , fontSize: "16px"
                                                            }}>Add New Student</Link>
                                                        </Dropdown.Menu>
                                                    </Dropdown></article> */}
                                                    <article>  </article>


                                                </main>
                                            </Card.Header>
                                            <Card.Body className='addstutnet1'>
                                                <img src='./img/addstutent.png' className='addstutnet' />
                                                <h5 className='text-center ' style={{ marginTop: "-20px" }}>You don't have any students yet</h5>
                                                <p className='text-center'>Add your students so you can take their attendance, and more.</p>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="success" id="dropdown-basic" className='addnewdg8 addnewdg11'>
                                                        <span className='adggsh'>Add New <IoMdArrowDropdown className="IoMdArrowDropdown1" style={{ fontSize: "26px" }} /></span>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className='menu87'>
                                                        <Link to="/AddNewStudent" style={{
                                                            color: "black", marginLeft: "10px", textDecoration: "none"
                                                            , fontSize: "16px"
                                                        }}>Add New Student</Link>

                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </Card.Body>
                                        </Card>

                                    </div>
                                </Tab>

                            </Tabs>



                            <Modal show={show} onHide={handleClose} animation={false}>
                                <Modal.Header closeButton>
                                    <Modal.Title><h5>Add Students Batch</h5></Modal.Title>
                                </Modal.Header>
                                <Modal.Body> <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Batch Name</Form.Label>
                                        <Form.Control type="text" className='forn89' required maxLength={20} />

                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Assigned Students</Form.Label>
                                        <Form.Control type="text" className='forn89' required maxLength={20} />
                                    </Form.Group>
                                    <div className='floah'>
                                        <Button variant="" className='btnhj' >
                                            Save
                                        </Button>
                                        <Button variant="secondary" className='btnh1j'>
                                            Cancel
                                        </Button>
                                    </div>

                                </Form></Modal.Body>

                            </Modal>
                        </div>



                    </main>
                </div>



            </div>
        </div>
    )
}




export default Student
