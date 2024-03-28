import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, FormLabel, Row } from 'react-bootstrap'
import './Login.css'
import Header from '../Header';
import Footer from '../Footer';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { RegisterUser } from '../apicalls/User';

const Signup = () => {

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        businessName: '',
        businessType: ''

    });
    const navigate = useNavigate();
    const [loading, setloading] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(data)
        setloading(true);
        const response = await RegisterUser(data);
        if (response.success === false) {
            //  toast.error(response.message);
            alert(response.message)
        }
        else if (response.success === true) {
            //console.log(response);
            toast.success(response.message);
            // alert(response.message)
            navigate('/Login');
        }
        console.log(response)

    }

    return (
        <div>
            <Header />
            <div className="new-wrapper">
                <h1 className='Signup1'>Sign in as a Tutor</h1>
                <p className='lets'>Lets Start the Journey </p>
                <section id="advertisers" class="advertisers-service-sec pt-5 pb-5 mb-5" style={{
                    backgroundImage:
                        "url('./img/signup.png')", backgroundSize: "cover",
                    backgroundRepeat: "no-repeat", padding: "90px 0px 90px 0px"
                }}>
                    <div class="container">

                        <div class="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
                            <div class="col">

                            </div>
                            <div class="col bkoo">
                                <div class="service-card2">
                                    <Card className='card576'>
                                        <h1 className='Signup2'>Let’s get started!</h1>
                                        {loading ? (
                                            <div class="spinner-border" role="status">
                                                <span class="sr-only"></span>
                                            </div>
                                        ) : (
                                            <Form className='form9180' onSubmit={handleSubmit}>

                                                <Form.Group className="mb-4" controlId="formBasicname">

                                                    <Form.Control className=" FormControl3" type="text" name="firstName" placeholder='Enter your first name' required
                                                        onChange={handleChange}

                                                    />


                                                </Form.Group>

                                                <Form.Group className="mb-4" controlId="formBasicname">

                                                    <Form.Control className=" FormControl3" type="text" name="lastName" placeholder='Enter your last name'
                                                        onChange={handleChange}
                                                        required />

                                                </Form.Group>

                                                <Form.Group className="mb-4" controlId="formBasicname">

                                                    <Form.Control className=" FormControl3" type="email" name="email" placeholder='Enter your Email Address'
                                                        onChange={handleChange}
                                                        required />

                                                </Form.Group>
                                                <Form.Group className="mb-4" controlId="formBasicname">

                                                    <Form.Control className=" FormControl3" type="password" name="password" placeholder='Pick a password' required />

                                                </Form.Group>
                                                <Form.Group className="mb-4" controlId="formBasicname">

                                                    <Form.Control className=" FormControl3" type="text" name="businessName" placeholder='Enter your business name '
                                                        onChange={handleChange}
                                                        required />

                                                </Form.Group>


                                                <Form.Select
                                                    aria-label="Default select example"
                                                    className="FormControl3"
                                                    onChange={handleChange}
                                                    value={data.businessType}
                                                    name="businessType" // Add name attribute to ensure handleChange updates the correct field
                                                >
                                                    <option disabled value="">Enter your business type</option> {/* Add disabled and empty value for placeholder */}
                                                    <option value="I am a Private Tutor">I am a Private Tutor</option>
                                                    <option value="I am a Tuition Center">I am a Tuition Center</option> {/* Removed extra space after "Center" */}
                                                </Form.Select>


                                                <Row className='my-3'>
                                                    <Col sm={1}>
                                                        <Form.Check type="checkbox" />
                                                    </Col>
                                                    <Col sm={11}>
                                                        <span className='ForgetPassword2' >  I agree to the Terms of Service <b style={{ color: "black", fontWeight: "400" }}>and</b> Privacy Policy.</span>


                                                    </Col>
                                                </Row>



                                                <Button className='VOIR_LESPRODUITSbn99 ' type="submit">Create account</Button>

                                            </Form>

                                        )

                                        }


                                    </Card>
                                    <br></br> <br></br> <br></br>
                                </div>
                            </div>
                            <div class="col">

                            </div>

                        </div>
                    </div>
                </section>




            </div>
            <div style={{ backgroundColor: "#1d3748" }} className='bg76'>
                <Container>
                    <Row>
                        <Col sm={6}>
                            <h5 style={{ color: "white" }}>Keep up to date — Get e-mail updates</h5>
                            <p style={{ color: "white" }}>Stay tuned for the latest company news.</p>
                        </Col>
                        <Col sm={6}>
                            <Form >

                                <div className="d-flex my-2">
                                    <Form.Control type="text" className='form1' placeholder='Enter e-mail Address' />

                                    <Button variant="" className='btn809' type="button">
                                        Subscribe Now
                                    </Button>

                                </div>



                            </Form>
                        </Col>
                    </Row>

                </Container>
            </div>
            <Footer />
        </div>
    )
}

export default Signup
