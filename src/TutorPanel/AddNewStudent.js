import React, { useState } from 'react'
import './AddNewStudent.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { GrNext } from "react-icons/gr";
import { IoIosArrowBack } from 'react-icons/io';
import { AddNewStudentRouter } from '../apicalls/Student';
import Lazyloading from '../BackendComp/Lazy'
import { toast } from 'react-toastify';
const AddNewStudent = () => {
    // const [phone, setPhone] = useState('');

    // const [showhide, setShowhide] = useState('');

    // const handleshowhide = (event) => {
    //     const getuser = event.target.value;
    //     setShowhide(getuser);

    // }

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        smsCapable: "",
        gender: "",
        dob: "",
        studentStatus: "",
        //studentType:studentType,
        familyType: "",
        firstNameParent: "",
        lastNameParent: "",
        lessonLength: "",
        emailParent: "",
        mobileNumberParent: "",
        smsCapableParent: "",
        preference: "",
        lessonCategory: "",
        billing: "",
        price: "",
        notes: ""
    });

    const [val, setVal] = useState([]);
    const handleAdd = () => {
        const abc = [...val, []]
        setVal(abc)
    }
    // const handleChange = (onChangeValue, i) => {
    //     const inputdata = [...val]
    //     inputdata[i] = onChangeValue.target.value;
    //     setVal(inputdata)

    // }

    const handleDelete = (i) => {
        const deletVal = [...val]
        deletVal.splice(i, 1)
        setVal(deletVal)
    }
    // console.log(val, "data-")
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target || e; // Use e if e.target is undefined
        const newValue = type === 'checkbox' ? checked : value;
        setFormData(prevState => ({
            ...prevState,
            [name]: newValue
        }));
    };

    const [loading, setloading] = useState(false);
    const navigate=useNavigate();



    const handleSubmit = async (event) => {
        event.preventDefault();
        //console.log(data)
        setloading(true);
        console.log(loading)
        const response = await AddNewStudentRouter(formData);

        if (response) {
            //console.log(response.message)
            setloading(false)
            if (response.success === false) {
                //  alert(response.message)
                toast.info(response.message);
            }
            else if(response.success===true) {
                toast.success(response.message);
                // navigate('/TutorHome',{state:response.data})
                // sessionStorage.setItem('token', response.data.token);
                // onLogin(response.data);
                 navigate('/Student_Redirect')

                // alert(response.message)
            }
            
           
        }

         
    }





    return (
        <div>
            <div className='backgroundy'>
                <Container>
                    <div className='content7'>
                        <Link to='/Home' style={{ fontSize: "24px", fontWeight: "600" }}><IoIosArrowBack />  Back to Students</Link>
                        <h3 style={{ fontWeight: "700" }} className="my-4">Add New Student</h3>
                    </div>

                    {loading?

                        (
                            <Lazyloading/>
                        ):
                    (
                        <Form className="formjhu" onSubmit={handleSubmit}>


                    <h3 className='mb-5' style={{ fontWeight: "700" }}>Student Details</h3>
                    <div className="mbsc-row row">
                        <div className=" mbsc-col-6 col-sm-6 mbsc-col-md-3 mbsc-col-lg-3">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label><b>First Name</b></Form.Label>
                                <Form.Control type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />

                            </Form.Group>
                        </div>
                        <div className=" mbsc-col-6 col-sm-6 mbsc-col-md-3 mbsc-col-lg-3">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label><b>Last Name</b></Form.Label>
                                <Form.Control type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />

                            </Form.Group>
                        </div>

                    </div>

                    <div className="mbsc-row row">
                        <div className=" mbsc-col-6 col-sm-6 mbsc-col-md-3 mbsc-col-lg-3">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label><b>Email Address</b></Form.Label>
                                <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />

                            </Form.Group>
                        </div>
                        <div className=" mbsc-col-6 col-sm-6 mbsc-col-md-3 mbsc-col-lg-3">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label><b>Mobile Number</b></Form.Label>
                                <PhoneInput
                                    defaultCountry="in"
                                    value={formData.mobileNumber}
                                    onChange={(value) => handleChange({ target: { name: 'mobileNumber', value } })}
                                    name='mobileNumber'
                                    type='text'
                                    required
                                />


                            </Form.Group>
                            <Form.Group className="" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="SMS Capable" name="smsCapable" checked={formData.smsCapable} onChange={handleChange} />
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
                                                        <Form.Select aria-label="Default select example" style={{ borderRadius: "30px" }}
                                                            value={formData.gender}
                                                            name="gender"
                                                            onChange={handleChange}
                                                            required
                                                        >
                                                            <option value='male'  >Male</option>
                                                            <option value="female">Female</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                </div>
                                                <div className=" mbsc-col-4 col-sm-4 mbsc-col-md-3 mbsc-col-lg-3 ">
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>Date of Birth</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            name="dob"
                                                            value={formData.dob}
                                                            onChange={handleChange}
                                                            required />

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
                            {['Active', 'Trial', 'Waiting', 'Lead', 'Inactive'].map((status) => (
                                <div key={status} className="mb-3">
                                    <Form.Check
                                        inline
                                        label={status}
                                        name="studentStatus"
                                        type="radio"
                                        checked={formData.studentStatus === status}
                                        onChange={handleChange}
                                        id={`inline-${status}`}
                                        className={`grou${status}`}
                                        value={status}
                                    />
                                </div>
                            ))}
                            <hr />
                        </div>


                        <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3 bnvdss">
                            {/* <h5>Student Type</h5> */}

                            {/* <Form.Group className="mb-3 p-2" controlId="formBasicCheckbox">
                                <Form.Check type="radio" label="Adult" />
                            </Form.Group> */}

                            <h5>This student’s family is a/an</h5>

                            {['New Family', 'Existing Family'].map((type) => (
                                <div key={type} className="mb-3 p-2">
                                    <Row>
                                        <Col sm={3} className="nbhgdyfsf">
                                            <Form.Check
                                                inline
                                                label={type}
                                                name="familyType"
                                                type="radio"
                                                checked={formData.familyType === type}
                                                onChange={handleChange}
                                                id={`inline-${type}-2`}
                                                className={`grou${type === 'New Family' ? '6' : '7'}`}
                                                value={type}
                                            />
                                            <p style={{ fontSize: "15px" }}>Creates a new account in Families & invoices</p>
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
                                <Form.Control
                                    type="text"
                                    value={formData.firstNameParent}
                                    name="firstNameParent"
                                    onChange={handleChange}
                                    required />

                            </Form.Group>
                        </div>
                        <div className=" mbsc-col-6 col-sm-6 mbsc-col-md-3 mbsc-col-lg-3">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label><b>Parent Last Name</b></Form.Label>
                                <Form.Control type="text"
                                    value={formData.lastNameParent}
                                    onChange={handleChange}
                                    required
                                    name="lastNameParent"
                                />

                            </Form.Group>
                        </div>

                    </div>
                    <div className="mbsc-row row">
                        <div className=" mbsc-col-6 col-sm-6 mbsc-col-md-3 mbsc-col-lg-3">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label><b>Email Address</b></Form.Label>
                                <Form.Control
                                    type="email"
                                    value={formData.emailParent}
                                    onChange={handleChange}
                                    name="emailParent"
                                    required

                                />
                            </Form.Group>
                        </div>
                        <div className=" mbsc-col-6 col-sm-6 mbsc-col-md-3 mbsc-col-lg-3">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label><b>Mobile Number</b></Form.Label>


                                <Form.Control
                                    type="number"
                                    value={formData.mobileNumberParent}
                                    onChange={handleChange}
                                    name="mobileNumberParent"
                                    required
                                />



                            </Form.Group>
                            <Form.Group className="" controlId="formBasicCheckbox">
                                <Form.Check
                                    type="checkbox"
                                    label="SMS Capable"
                                    name="smsCapableParent"
                                    checked={formData.smsCapableParent}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                        </div>

                    </div>
                    <div className="mbsc-row">
                        <div className="mbsc-col-12 mbsc-col-md-12 mbsc-col-lg-3">

                            {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label> Address  Optional</Form.Label>
                                <h5>Address <span style={{ color: "gray" }}>Optional</span></h5>
                                <Form.Control
                                // onChange={handleChange}
                                // value={formData.}
                                
                                
                                as="textarea" rows={3} style={{ borderRadius: "30px" }} />
                            </Form.Group> */}

                            <h5>Preferences</h5>
                            <Form.Group className="mb-" controlId="formBasicCheckbox">
                                <Form.Check
                                    type="checkbox"
                                    label="Send email lessons reminders"
                                    checked={formData.preference}
                                    onChange={handleChange}
                                    name="preference"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check
                                    type="checkbox"
                                    label="Send SMS lessons reminders"
                                    checked={formData.preference}
                                    onChange={handleChange}
                                    name="preference"
                                />
                                <p style={{ fontSize: "14px", marginLeft: "25px" }}>Will only be sent if SMS messaging is allowed</p>
                            </Form.Group>

                        </div>
                        <hr></hr>
                    </div>
                    <div className="mbsc-row row">
                        <div className=" mbsc-col-6 col-sm-6 mbsc-col-md-3 mbsc-col-lg-3">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label><b>Default Lesson Category</b></Form.Label>
                                <Form.Select aria-label="Default select example"
                                    style={{ borderRadius: "30px" }}
                                    value={formData.lessonCategory}
                                    name="lessonCategory"
                                    onChange={(e) => handleChange(e)}
                                    required
                                >
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

                                <Form.Control
                                    type="text"
                                    placeholder="enter minutes"
                                    name="lessonLength"
                                    value={formData.lessonLength}
                                    onChange={handleChange}
                                />
                                <span style={{ float: "right", margin: "-30px 40px 0px 0px" }}> minutes</span>




                            </Form.Group>


                        </div>

                    </div>
                    <div className="mbsc-row">
                        <div className="mbsc-col-12 mbsc-col-md-12 mbsc-col-lg-3 p">


                            <h5>Default Billing</h5>
                            <div className='p-2'>
                                {
                                    ["1", "2", "3", "4"].map((item) => (
                                        <Form.Group className=" "
                                            controlId="formBasicCheckbox">
                                            <Form.Check
                                                inline
                                                name="billing"
                                                checked={formData.billing === item}
                                                onChange={handleChange}
                                                id={`inline-${item}`}
                                                value={item}

                                                type="radio"
                                                label={item} />
                                        </Form.Group>

                                    ))
                                }
                            </div>
                        </div>

                    </div>
                    <div className="mbsc-row row">
                        <div className=" mbsc-col-6 col-sm-6 mbsc-col-md-3 mbsc-col-lg-3">
                            <h5>Price</h5>
                            <Form.Select
                                aria-label="Default select example"
                                style={{ borderRadius: "30px" }}
                                value={formData.price}
                                name="price"
                                onChange={handleChange}
                                required


                            >
                                <option value=" 30">₹ 30.00 Per Lesson</option>
                                <option value="100">₹ 100.00 Per Lesson</option>
                                <option value="200">₹ 200.00 Per Lesson</option>

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

                                <Form.Control as="textarea" rows={3} style={{ borderRadius: "30px" }}
                                    onChange={handleChange}
                                    name="notes"
                                    value={formData.notes}


                                />
                            </Form.Group>
                        </div>

                    </div>
                    <div className="mbsc-row">
                        <div className="mbsc-col-12 mbsc-col-md-12 mbsc-col-lg-3">
                            <div className="mbsc-button-group-block ">
                                <Button color="success" className="grnext1">Cancel</Button>
                                <Button type="submit" color="success" className="grnext">Next <GrNext
                                    style={{ color: "white" }} /></Button>
                            </div>
                        </div>
                    </div>
                    </Form>
                    )
                   
                    
                    
                    }

                </Container>
            </div>
        </div>
    )
}






export default AddNewStudent