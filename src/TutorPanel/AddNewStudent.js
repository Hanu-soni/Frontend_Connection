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


const AddNewStudent = ({ userData }) => {
    // const [phone, setPhone] = useState('');

    // const [showhide, setShowhide] = useState('');

    // const handleshowhide = (event) => {
    //     const getuser = event.target.value;
    //     setShowhide(getuser);

    // }
    //console.log(data)

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        smsCapable: "",
        batch: "",
        studentStatus: "",
        //studentType:studentType,
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
        notes: "",
        managedBy: userData.id
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
    const navigate = useNavigate();



    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData)
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
            else if (response.success === true) {
                console.log("coming here")
                toast.success(response.message);
                // navigate('/TutorHome',{state:response.data})
                // sessionStorage.setItem('token', response.data.token);
                // onLogin(response.data);
                navigate('/Student')

                // alert(response.message)
            }


        }


    }


    //Validation



    return (
        <div>
            <div className='backgroundy'>
                <Container>
                    <div className='content7'>
                        <Link to='/Home' style={{ fontSize: "24px", fontWeight: "600" }}><IoIosArrowBack />  Back to Students</Link>
                        <h3 style={{ fontWeight: "700" }} className="my-4">Add New Student</h3>
                    </div>

                    {loading ?

                        (
                            <Lazyloading />
                        ) :
                        (
                            <Form className="formjhu" onSubmit={handleSubmit}>


                                <h3 className='mb-5' style={{ fontWeight: "700" }}>Student Details</h3>
                                <div className="mbsc-row row">
                                    <div className=" mbsc-col-6 col-sm-6 mbsc-col-md-3 mbsc-col-lg-3">
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label><b>First Name</b></Form.Label>
                                            <Form.Control type="text" name="firstName" value={formData.firstName}
                                                onChange={handleChange}


                                            />

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
                                            <Form.Control type="email" name="email" value={formData.email} onChange={handleChange}
                                                required
                                            />

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
                                            <Form.Check type="checkbox" label="SMS Capable" name="smsCapable" checked={formData.smsCapable} onChange={handleChange}

                                            />
                                        </Form.Group>

                                    </div>

                                </div>
                                <div className="mbsc-row">
                                    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3 mb-3">

                                        <div className="col-md- form-group ">


                                            <Button onClick={() => handleAdd()} className="addbtn">+ Show additional details</Button>





                                            {val.map((data, i) => {
                                                return (
                                                    <div>
                                                        <div className="mbsc-row row my-3">
                                                            <div className=" mbsc-col-4 col-sm-4 mbsc-col-md-3 mbsc-col-lg-3 ">
                                                                <Form.Group className="mb-4" controlId="formBasicEmail">
                                                                    <Form.Label>Batch</Form.Label>
                                                                    <Form.Select aria-label="Default select example" style={{ borderRadius: "30px" }}
                                                                        value={formData.batch}
                                                                        name="batch"
                                                                        onChange={handleChange}

                                                                    >
                                                                        <option value=" 30">Select from Batch</option>

                                                                        <option value='Batch-1'  >Batch-1</option>
                                                                        <option value="Batch-2">Batch-2</option>
                                                                    </Form.Select>
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
                                    <h5>Student Status</h5>
                                    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3 chectradisbbtn">

                                        {['Active', 'Trial', 'Waiting', 'Lead', 'Inactive'].map((status) => (
                                            <div key={status} className="mb-3 ">
                                                <Form.Check
                                                    inline
                                                    label={status}
                                                    name="studentStatus"
                                                    type="radio"
                                                    checked={formData.studentStatus === status}
                                                    onChange={handleChange}
                                                    id={`inline-${status}`} // Correct usage of template literal
                                                    className={`grou${status}`} // Correct usage of template literal
                                                    value={status}
                                                />
                                            </div>
                                        ))}

                                        <hr />
                                    </div>

                                </div>
                                <div className="mbsc-row">

                                    <div className="mbsc-col-12 mbsc-col-md-12 mbsc-col-lg-12 bnvdss">
                                        {/* <h5>Student Type</h5> */}

                                        {/* <Form.Group className="mb-3 p-2" controlId="formBasicCheckbox">
                                <Form.Check type="radio" label="Adult" />
                            </Form.Group> */}

                                        {/* <h5>This student’s family is a/an</h5>
                                        <div className="d-flex flex-row">
                                            {['New Family', 'Existing Family'].map((type) => (
                                                <div key={type} className="mb-3 p-2 d-flex">
                                                    <Row>
                                                        <Col sm={12} className="nbhgdyfsf">
                                                            <Form.Check
                                                                inline
                                                                label={type}
                                                                name="familyType"
                                                                type="radio"
                                                                checked={formData.familyType === type}
                                                                onChange={handleChange}
                                                                id={inline-${type}-2}
                                                                className={grou${type === 'New Family' ? '6' : '7'}}
                                                                value={type}
                                                            />

                                                        </Col>
                                                    </Row>
                                                </div>
                                            ))}
                                        </div>
                                        <p style={{ fontSize: "15px" }}>Creates a new account in Families & invoices</p> */}


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


                                            {/* <Form.Control
                                                type="number"
                                                value={formData.mobileNumberParent}
                                                onChange={handleChange}
                                                name="mobileNumberParent"
                                                required
                                            /> */}

                                            <PhoneInput
                                                defaultCountry="in"
                                                value={formData.mobileNumberParent}
                                                onChange={(value) => handleChange({ target: { name: 'mobileNumberParent', value } })}
                                                name='mobileNumberParent'
                                                type='text'
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

                                        {
                                            ["Send SMS lessons reminders", "Send Email lessons reminders"].map((item) => (
                                                <Form.Group className="mb-3" controlId="formBasicCheckbox" key={item}>
                                                    <Form.Check
                                                        inline
                                                        type="radio"
                                                        label={item}
                                                        checked={formData.preference === item}
                                                        onChange={handleChange}
                                                        name="preference"
                                                        id={`inline-${item}`} // Correct usage of template literal
                                                        value={item}
                                                    />
                                                    <p style={{ fontSize: "14px", marginLeft: "25px" }}>Will only be sent if SMS messaging is allowed</p>
                                                </Form.Group>
                                            ))

                                        }

                                        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check
                                    type="checkbox"
                                    label="Send SMS lessons reminders"
                                    checked={formData.preference}
                                    onChange={handleChange}
                                    name="preference"
                                />
                                <p style={{ fontSize: "14px", marginLeft: "25px" }}>Will only be sent if SMS messaging is allowed</p>
                            </Form.Group> */}

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
                                                <option>Select Lesson</option>
                                                <option value="Lesson-1">Lesson-1</option>
                                                <option value="Lesson-2">Lesson-2</option>
                                                <option value="Lesson-3">Lesson-3</option>
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
                                                required

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
                                                ["Dont automatically create any calender generated changes",
                                                    "Student Pays based on number of lessons",
                                                    "Student pays the same amount each month",
                                                    "Student pays an hourly rate"
                                                ].map((item) => (
                                                    <Form.Group className=" "
                                                        controlId="formBasicCheckbox">
                                                        <Form.Check
                                                            inline
                                                            name="billing"
                                                            checked={formData.billing === item}
                                                            onChange={handleChange}
                                                            id={`inline - ${item}`}
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
                                            placeholder="Select from below"

                                        >
                                            <option value=" 30">Select from below</option>
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


                                        <h5>Note  <span style={{ fontWeight: "400", fontSize: "16px" }}>&lpar;Optional&rpar; </span></h5>
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
                                    <div className="mbsc-col-12 mbsc-col-md-12 mbsc-col-lg-3 ">
                                        <div className="mbsc-button-group-block">
                                            <Button onClick={() => navigate('/Student')} color="success" className="grnext1">Cancel</Button>
                                            <Button type="submit" color="success" className="grnext" >Save <GrNext
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