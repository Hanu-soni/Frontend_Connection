import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import './Login.css';
import  { LoginUser } from '../apicalls/User';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const navigate=useNavigate();

    // Function to handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };



    // Function to handle form submission
    const handleSubmit= async (event)=>{
        event.preventDefault();
        //console.log(data)
        const response= await LoginUser(data);
        if(response.success===false){
            // alert(response.message)
            toast.info(response.message);
        }
        else{
            toast.success(response.message);
            navigate('/DashboardHome')
        }
         console.log(response)
    }



    return (
        <div>
            <div className="new-wrapper">
                <h1 className='Signup1'>Sign in as a Tutor</h1>
                <p className='lets'>Lets Start the Journey </p>
                <section id="advertisers" className="advertisers-service-sec pt-5 pb-5">
                    <div className="container">
                        <div className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
                            <div className="col"></div>
                            <div className="col">
                                <div className="service-card">
                                    <Card className='card576'>
                                        <h1 className='Signup2'>Let’s get started!</h1>
                                        <Form className='form9180' onSubmit={handleSubmit}>
                                            <Form.Group className="mb-4" controlId="formBasicEmail">
                                                <Form.Control
                                                    className="FormControl3"
                                                    type="email"
                                                    name="email"
                                                    placeholder='Email'
                                                    required
                                                    onChange={handleChange}
                                                    value={data.email}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-4" controlId="formBasicPassword">
                                                <Form.Control
                                                    className="no-outline FormControl3"
                                                    type="password"
                                                    placeholder='Password'
                                                    maxLength={20}
                                                    name="password"
                                                    required
                                                    onChange={handleChange}
                                                    value={data.password}
                                                />
                                                <a href='#' className='ForgetPassword'>Forget Password ?</a>
                                            </Form.Group>
                                            <Button onClick={handleSubmit} className='VOIR_LESPRODUITSbn9' type="submit">Sign in</Button>
                                        </Form>
                                        <h5 className='notres'>Not Registered ?</h5>
                                        <a href='Signup' className='notres1'>Sign Up</a>
                                    </Card>
                                </div>
                            </div>
                            <div className="col"></div>
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
                            <Form>
                                <div className="d-flex my-2">
                                    <Form.Control type="text" className='form1' placeholder='Enter e-mail Address' />
                                    <Button variant="" className='btn809' type="button">Subscribe Now</Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Login;