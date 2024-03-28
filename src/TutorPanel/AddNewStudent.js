import React, { useState } from 'react'
import './AddNewStudent.css'
import { Link } from 'react-router-dom'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { GrNext } from "react-icons/gr";
import { IoIosArrowBack } from 'react-icons/io';
const AddNewStudent = () => {
    const [phone, setPhone] = useState('');

    const [showhide, setShowhide] = useState('');

    const handleshowhide = (event) => {
        const getuser = event.target.value;
        setShowhide(getuser);

    }

    const [val, setVal] = useState([]);
    const handleAdd = () => {
        const abc = [...val, []]
        setVal(abc)
    }
    const handleChange = (onChangeValue, i) => {
        const inputdata = [...val]
        inputdata[i] = onChangeValue.target.value;
        setVal(inputdata)
    }
    const handleDelete = (i) => {
        const deletVal = [...val]
        deletVal.splice(i, 1)
        setVal(deletVal)
    }
    console.log(val, "data-")

    return (
        <div>
            <div className='backgroundy'>
                <Container>
                    <div className='content7'>
                        <Link to='/TutorHome' style={{ fontSize: "24px", fontWeight: "600" }}><IoIosArrowBack />  Back to Students</Link>
                        <h3 style={{ fontWeight: "700" }}  className="my-4">Add New Student</h3>
                    </div>

                    <Form className="formjhu">


                        <h3 className='mb-5' style={{ fontWeight: "700" }}>Student Details</h3>
                        <div className="mbsc-row row">
                            <div className=" mbsc-col-6 col-sm-6 mbsc-col-md-3 mbsc-col-lg-3">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label><b>First Name</b></Form.Label>
                                    <Form.Control type="text" required />

                                </Form.Group>
                            </div>
                            <div className=" mbsc-col-6 col-sm-6 mbsc-col-md-3 mbsc-col-lg-3">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label><b>Last Name</b></Form.Label>
                                    <Form.Control type="text" required />

                                </Form.Group>
                            </div>

                        </div>

                        <div className="mbsc-row row">
                            <div className=" mbsc-col-6 col-sm-6 mbsc-col-md-3 mbsc-col-lg-3">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label><b>Email Address</b></Form.Label>
                                    <Form.Control type="email" />

                                </Form.Group>
                            </div>
                            <div className=" mbsc-col-6 col-sm-6 mbsc-col-md-3 mbsc-col-lg-3">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label><b>Mobile Number</b></Form.Label>
                                    <PhoneInput
                                        defaultCountry="in"
                                        value={phone}
                                        onChange={(phone) => setPhone(phone)}
                                    />

                                </Form.Group>
                                <Form.Group className="" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="SMS Capable" />
                                </Form.Group>

                            </div>

                        </div>
                        <div className="mbsc-row">
                            <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">

                                <div className="col-md- form-group ">


                                    <Button onClick={() => handleAdd()} className="addbtn">+ Show additional details</Button>


                                    {val.map((data, i) => {
                                        return (
                                            <div>
                                                <div className="mbsc-row row my-3">
                                                    <div className=" mbsc-col-4 col-sm-4 mbsc-col-md-3 mbsc-col-lg-3 ">
                                                        <Form.Group className="mb-4" controlId="formBasicEmail">
                                                            <Form.Label>Gender</Form.Label>
                                                            <Form.Select aria-label="Default select example" style={{ borderRadius: "30px" }}>
                                                                <option value='male'>Male</option>
                                                                <option value="female">Female</option>

                                                            </Form.Select>
                                                        </Form.Group>
                                                    </div>
                                                    <div className=" mbsc-col-4 col-sm-4 mbsc-col-md-3 mbsc-col-lg-3 ">
                                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                            <Form.Label>Date of Birth</Form.Label>
                                                            <Form.Control type="date" required />

                                                        </Form.Group>
                                                    </div>
                                                    <div className=" mbsc-col-4 col-sm-4 mbsc-col-md-3 mbsc-col-lg-3 " style={{ marginTop: "29px" }}>
                                                        <Button onClick={() => handleDelete(i)} className="rembtn ">Remove</Button>
                                                    </div>

                                                </div>





                                            </div>
                                        )
                                    })}


                                </div>


                            </div>
                            <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                                <h5>Student Status</h5>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                            inline
                                            label="Active"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`} className='grou1'
                                        />
                                        <Form.Check
                                            inline
                                            label="Trial"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`} className='grou2'
                                        />
                                        <Form.Check
                                            inline
                                            label="Waiting"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`} className='grou3'
                                        />

                                        <Form.Check
                                            inline
                                            label="Lead"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`} className='grou4'
                                        />
                                        <Form.Check
                                            inline

                                            label="Inactive"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`} className='grou5'
                                        />

                                    </div>
                                ))}
                                <hr></hr>
                            </div>

                            <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3 bnvdss">
                                <h5>Student Type</h5>

                                <Form.Group className="mb-3 p-2" controlId="formBasicCheckbox">
                                    <Form.Check type="radio" label="Adult" />
                                </Form.Group>

                                <h5>This student’s family is a/an</h5>

                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3 p-2">
                                        <Row>
                                            <Col sm={3} className="nbhgdyfsf">
                                                <Form.Check
                                                    inline
                                                    label="New Family"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-2`} className='grou6'
                                                />
                                                <p style={{ fontSize: "15px" }}>Creates a new  account in Families & invoices</p>
                                            </Col>
                                            <Col sm={9} className="nbhgdyfsf">
                                                <Form.Check
                                                    inline
                                                    label="Existing Family"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-2`} className='grou7'
                                                />
                                            </Col>
                                        </Row>





                                    </div>
                                ))}
                            </div>

                        </div>
                        <div className="mbsc-row row">
                            <div className=" mbsc-col-6 col-sm-6 mbsc-col-md-3 mbsc-col-lg-3">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label><b>Parent First Name</b></Form.Label>
                                    <Form.Control type="text" required />

                                </Form.Group>
                            </div>
                            <div className=" mbsc-col-6 col-sm-6 mbsc-col-md-3 mbsc-col-lg-3">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label><b>Parent Last Name</b></Form.Label>
                                    <Form.Control type="text" required />

                                </Form.Group>
                            </div>

                        </div>
                        <div className="mbsc-row row">
                            <div className=" mbsc-col-6 col-sm-6 mbsc-col-md-3 mbsc-col-lg-3">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label><b>Email Address</b></Form.Label>
                                    <Form.Control type="email" />

                                </Form.Group>
                            </div>
                            <div className=" mbsc-col-6 col-sm-6 mbsc-col-md-3 mbsc-col-lg-3">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label><b>Mobile Number</b></Form.Label>


                                    <Form.Control type="number" />



                                </Form.Group>
                                <Form.Group className="" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="SMS Capable" />
                                </Form.Group>

                            </div>

                        </div>
                        <div className="mbsc-row">
                            <div className="mbsc-col-12 mbsc-col-md-12 mbsc-col-lg-3">

                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    {/* <Form.Label> Address  Optional</Form.Label> */}
                                    <h5>Address <span style={{ color: "gray" }}>Optional</span></h5>
                                    <Form.Control as="textarea" rows={3} style={{ borderRadius: "30px" }} />
                                </Form.Group>

                                <h5>Preferences</h5>
                                <Form.Group className="mb-" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Send email lessons reminders" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Send SMS lessons reminders" />
                                    <p style={{ fontSize: "14px", marginLeft: "25px" }}>Will only be sent if SMS messaging is allowed</p>
                                </Form.Group>
                            </div>
                            <hr></hr>
                        </div>
                        <div className="mbsc-row row">
                            <div className=" mbsc-col-6 col-sm-6 mbsc-col-md-3 mbsc-col-lg-3">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label><b>Default Lesson Category</b></Form.Label>
                                    <Form.Select aria-label="Default select example" style={{ borderRadius: "30px" }}>
                                        <option> Lesson</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>

                                </Form.Group>
                            </div>
                            <div className=" mbsc-col-6 col-sm-6 mbsc-col-md-3 mbsc-col-lg-3">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label><b>Default Lesson Length</b></Form.Label>

                                    <Form.Control type="text" placeholder="30" /><span style={{ float: "right", margin: "-30px 40px 0px 0px" }}> minutes</span>




                                </Form.Group>


                            </div>

                        </div>
                        <div className="mbsc-row">
                            <div className="mbsc-col-12 mbsc-col-md-12 mbsc-col-lg-3 p">


                                <h5>Default Billing</h5>
                                <div className='p-2'>
                                    <Form.Group className=" " controlId="formBasicCheckbox">
                                        <Form.Check type="radio" label="Don’t automatically create any calander-generated charges" />
                                    </Form.Group>
                                    <Form.Group className="" controlId="formBasicCheckbox">
                                        <Form.Check type="radio" label="Student pays based on the number of lessons taken" />
                                    </Form.Group>
                                    <Form.Group className="" controlId="formBasicCheckbox">
                                        <Form.Check type="radio" label="Student pays the same amount each month regardless of number of lessons" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="radio" label="Student pays an hourly rate" />


                                        <p style={{ fontSize: "14px", marginLeft: "25px" }}>Charges will automatically adjust to lesson length</p>
                                    </Form.Group>
                                </div>
                            </div>

                        </div>
                        <div className="mbsc-row row">
                            <div className=" mbsc-col-6 col-sm-6 mbsc-col-md-3 mbsc-col-lg-3">
                                <h5>Price</h5>
                                <Form.Select aria-label="Default select example" style={{ borderRadius: "30px" }}>
                                    <option>₹ 30.00 Per Lesson</option>
                                    <option value="1">₹ 30.00 Per Lesson</option>

                                </Form.Select>
                            </div>
                            <div className=" mbsc-col-6 col-sm-6 mbsc-col-md-3 mbsc-col-lg-3">

                            </div>

                        </div>
                        <hr></hr>
                        <div className="mbsc-row">
                            <div className="mbsc-col-12 mbsc-col-md-12 mbsc-col-lg-3 p">


                                <h5>Note <span style={{ fontWeight: "400", fontSize: "16px" }}>Optional</span></h5>
                                <p>Use this area for any private notes you wish to keep.</p>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                                    <Form.Control as="textarea" rows={3} style={{ borderRadius: "30px" }} />
                                </Form.Group>
                            </div>

                        </div>
                        <div className="mbsc-row">
                            <div className="mbsc-col-12 mbsc-col-md-12 mbsc-col-lg-3">
                                <div className="mbsc-button-group-block ">
                                    <Button color="success" className="grnext1">Cancel</Button> <Button color="success" className="grnext">Next <GrNext
                                        style={{ color: "white" }} /></Button>
                                </div>
                            </div>
                        </div>
                    </Form>
                </Container>
            </div>
        </div>
    )
}






export default AddNewStudent

