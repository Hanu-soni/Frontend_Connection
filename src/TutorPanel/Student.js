import { Link } from 'react-router-dom'
import { Button, Card, Col, Container, Dropdown, Form, Modal, Nav, Navbar, Row, Tab, Tabs } from 'react-bootstrap'
import { CiShare2 } from 'react-icons/ci'
import { IoIosNotificationsOutline, IoMdArrowDropdown } from 'react-icons/io'

import { FaBars } from 'react-icons/fa6'
import './Subscription.css'
import { useState } from 'react'
import './Student.css'
const Student = () => {
    const [key, setKey] = useState('home');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div className='desktop13'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light debhh fixed-top" >
                    <a className="navbar-brand" >Student</a>

                    <CiShare2 className='share1' /> <IoIosNotificationsOutline className='share1' />
                    <span className='tst'>TS</span>


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
                            <li class="nav-item">
                                <Link to="/TutorHome" className="nav-link nav-link1">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Student" className="nav-link nav-link1">Student</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Calendar" className="nav-link nav-link1">Calendar</Link>
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
                                <li className="nav-item">
                                    <Link to="/TutorHome" className="navlinkjh nav-link mb-4"> <img src='./img/tutordash.png' className="logoimgy " /><span className='tutorl0go'>Tutor Octopus</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/TutorHome" className="navlinkjh nav-link"><img src="./img/home.png" className="logoimgy1 " />Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Student" className="navlinkjh nav-link"><img src="./img/student1.png" className="logoimgy1 " />Student</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/Calendar" className="navlinkjh nav-link"> <img src="./img/Calendar.png" className="logoimgy1 " />Calendar</Link>
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

                    <main role="main" class="col-md-9 col-lg-10">
                        <Navbar className="bg-body-tertiaryb desktop1">
                            <Container>
                                <Navbar.Brand className='subscrip'>Student</Navbar.Brand>
                                <Navbar.Toggle />
                                <Navbar.Collapse className="justify-content-end">

                                    <Navbar.Text>
                                        <CiShare2 className='share1' /> <IoIosNotificationsOutline className='share1' />
                                        {/* <SiTypescript className='share2' /> */}
                                        {/* <img src='./img/Typescript_logo_2020.png' width={30}/> */}
                                        <span className='tst'>TS</span>
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
                                                    <article>   <Dropdown>
                                                        <Dropdown.Toggle variant="success" id="dropdown-basic" className='addnewdg1'>
                                                            <span className='adggsh'> Messaging <IoMdArrowDropdown className="IoMdArrowDropdown" style={{ fontSize: "26px" }} /></span>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu className='menu87'>
                                                            <Link to="/" style={{
                                                                color: "black", marginLeft: "10px", textDecoration: "none"
                                                                , fontSize: "16px"
                                                            }}>Add New Student</Link>
                                                        </Dropdown.Menu>
                                                    </Dropdown></article>
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
                                                        <Link to="/" style={{
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
                                                            <Link to="/" style={{
                                                                color: "black", marginLeft: "10px", textDecoration: "none"
                                                                , fontSize: "16px"
                                                            }}>Add New Student</Link>
                                                        </Dropdown.Menu>
                                                    </Dropdown></article>
                                                    <article>   <Dropdown>
                                                        <Dropdown.Toggle variant="success" id="dropdown-basic" className='addnewdg1'>
                                                            <span className='adggsh'> Messaging <IoMdArrowDropdown className="IoMdArrowDropdown" style={{ fontSize: "26px" }} /></span>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu className='menu87'>
                                                            <Link to="/" style={{
                                                                color: "black", marginLeft: "10px", textDecoration: "none"
                                                                , fontSize: "16px"
                                                            }}>Add New Student</Link>
                                                        </Dropdown.Menu>
                                                    </Dropdown></article>
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
                                                        <Link to="/" style={{
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
