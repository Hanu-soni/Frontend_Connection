import { Button, Card, Col, Container, Dropdown, Form, Modal } from 'react-bootstrap'
import { IoMdArrowDropdown } from 'react-icons/io'

import { FaBars } from 'react-icons/fa6'
import '../Subscription.css'
import { useEffect, useState } from 'react'
import '../Student.css'
import MobilemenuNavbar from '../SideNavbar/MobilemenuNavbar'
import Sidenavbar from '../SideNavbar/Sidenavbar'
import TopBar from '../SideNavbar/TopBar'
import { AnnouncementUser, getAnnouncementUser } from '../../apicalls/User'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Announcements = ({ userData }) => {
    const [key, setKey] = useState('home');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(userData)



    const userDataString = sessionStorage.getItem('userData');
    if (userDataString) {
        const userData = JSON.parse(userDataString);
        const userId = userData.id;
        // Now you can use userId as needed
    }
    else {
        toast.info('id is not present');
    }



    const [data, setData] = useState({
        subject: "",
        description: "",
        _id: userData.id
    });




    const [loading, setloading] = useState(false);
    const navigate = useNavigate();


    const [AnnouncementData, setAnnouncementData] = useState({
        subject: [],
        description: []
    });


    const [buttonAnnouncement, setbuttonAnnouncement] = useState(true);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };



    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(data)
        setloading(true);
        console.log(loading)
        const response = await AnnouncementUser(data);

        if (response) {
            console.log(response)
            setloading(false)
            if (response.success === false) {
                //  alert(response.message)
                toast.info(response.message);
            }
            else if (response.success === true) {
                toast.success(response.message);
                // setAnnouncementData({
                //     subject:response.data.subject,
                //     description:response.data.description
                // })
                handleGetAnnouncement(event);


                // sessionStorage.setItem('subject',response.data.subject)
                // sessionStorage.setItem('description',response.data.description)
                handleClose()
                // navigate('/TutorHome',{state:response.data})
                // sessionStorage.setItem('token', response.data.token);
                // onLogin(response.data);
                // navigate('/Student_Redirect')

                // alert(response.message)
            }


        }


    }

    const handleGetAnnouncement = async (event) => {
        event.preventDefault();
        setbuttonAnnouncement(false)
        // let data={id:userData.id}
        const response = await getAnnouncementUser(userData.id);
        console.log(response)
        setAnnouncementData({
            subject: response.data.subject,
            description: response.data.description
        })

    }



    // useEffect(() => {
    //     handleGetAnnouncement
    // }, []); 






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

                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" className='addnewdg8 addnewdg11'>
                                    <span className='adggsh'> Add Announcements <IoMdArrowDropdown className="IoMdArrowDropdown" style={{ fontSize: "26px" }} /></span>
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='menu87'>
                                    <Button variant="" onClick={handleShow} style={{ border: "none" }}>
                                        Add Announcements
                                    </Button>

                                </Dropdown.Menu>
                            </Dropdown>

                            <Card className='addnewcard'>

                                {/* <Card.Body className='addstutnet1'>
                                    <img src='./img/Announcements.png' className='addstutnet3 my-5' />
                                    <h5 className='text-center mb-4' style={{ marginTop: "-20px" }}>You don't have any Announcements</h5>


                                    
                                    <br></br><br></br>
                                </Card.Body> */}

                                {buttonAnnouncement === true ?
                                    (<Button style={{ width: "15rem" }} className='btnhj' onClick={handleGetAnnouncement}>Show Announcement</Button>) :
                                    (
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Sl.no</th>
                                                    <th scope="col">Subject</th>
                                                    <th scope="col">Description</th>
                                                    {/* <th scope="col">Handle</th> */}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    AnnouncementData.subject.map((item, index) => (
                                                        <tr className=''>
                                                            <td>{index + 1}</td>
                                                            <td>{AnnouncementData.subject[index]}</td>
                                                            <td>{AnnouncementData.description[index]}</td>
                                                        </tr>

                                                    ))

                                                }


                                            </tbody>
                                        </table>

                                    )
                                }

                            </Card>





                            <Modal show={show} onHide={handleClose} animation={false}>
                                <Modal.Header closeButton>
                                    <Modal.Title><h5>Add Announcements</h5></Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Subject</Form.Label>
                                            <Form.Control
                                                type="text"
                                                className='forn89'
                                                required maxLength={40}
                                                name='subject'
                                                onChange={handleChange}
                                            />

                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Descriptions</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={3}
                                                style={{ borderRadius: "30px" }}
                                                required
                                                maxLength={90}
                                                name='description'
                                                onChange={handleChange}


                                            />
                                        </Form.Group>
                                        <div className='floah'>
                                            <Button type='submit' variant="" className='btnhj' >
                                                Save
                                            </Button>
                                            {/* <Button variant="secondary" className='btnh1j'>
                                                Cancel
                                            </Button> */}
                                        </div>

                                    </Form>
                                </Modal.Body>

                            </Modal>
                        </div>



                    </main>
                </div>



            </div>
        </div>
    )
}




export default Announcements

