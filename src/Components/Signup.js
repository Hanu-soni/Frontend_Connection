import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, FormLabel, Row } from 'react-bootstrap'
import './Login.css'
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


    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // Function to handle form submission
    const handleSubmit =  async (event) => {
        event.preventDefault();
        console.log(data)
         const response= await RegisterUser(data);
        console.log(response)

    }



    return (
        <div>
            <div className="new-wrapper">
                <h1 className='Signup1'>Sign in as a Tutor</h1>
                <p className='lets'>Lets Start the Journey </p>
                <section id="advertisers" class="advertisers-service-sec pt-5 pb-5">
                    <div class="container">

                        <div class="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
                            <div class="col">

                            </div>
                            <div class="col">
                                <div class="service-card">
                                    <Card className='card576'>
                                        <h1 className='Signup2'>Let’s get started!</h1>
                                        <Form className='form9180' onSubmit={handleSubmit}>

                                            <Form.Group className="mb-4" controlId="formBasicname">

                                                <Form.Control
                                                    className="FormControl3"
                                                    type="text"
                                                    maxLength={20}
                                                    name="firstName" // Corrected name attribute to "firstName"
                                                    placeholder='Enter your first name'
                                                    required
                                                    onChange={handleChange}
                                                    value={data.firstName}
                                                />


                                            </Form.Group>

                                            <Form.Group className="mb-4" controlId="formBasicname">

                                                <Form.Control className=" FormControl3" type="text" maxLength={20} name="lastName" placeholder='Enter your last name' required
                                                    onChange={handleChange}
                                                    value={data.lastName}


                                                />

                                            </Form.Group>

                                            <Form.Group className="mb-4" controlId="formBasicname">

                                                <Form.Control
                                                    className=" FormControl3"
                                                    type="email"
                                                    maxLength={20}
                                                    name="email"
                                                    placeholder='Enter your Email Address'
                                                    required
                                                    onChange={handleChange}
                                                    value={data.email}
                                                />

                                            </Form.Group>
                                            <Form.Group className="mb-4" controlId="formBasicname">

                                                <Form.Control
                                                    className=" FormControl3"
                                                    type="password"
                                                    maxLength={20}
                                                    name="password"
                                                    placeholder='Pick a password'
                                                    required
                                                    onChange={handleChange}
                                                    value={data.password}
                                                />

                                            </Form.Group>
                                            <Form.Group className="mb-4" controlId="formBasicname">

                                                <Form.Control
                                                    className=" FormControl3"
                                                    type="text"
                                                    maxLength={20}
                                                    name="businessName"
                                                    placeholder='Enter your business name '
                                                    required
                                                    onChange={handleChange}
                                                    value={data.businessName}

                                                />

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


                                            <p className='ForgetPassword2' >I agree to the Terms of Service <b style={{ color: "black", fontWeight: "400" }}>and</b> Privacy Policy.</p>



                                            <Button className='VOIR_LESPRODUITSbn99 ' type="submit">Log in account</Button>

                                        </Form>

                                    </Card>
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
        </div>
    )
}

export default Signup