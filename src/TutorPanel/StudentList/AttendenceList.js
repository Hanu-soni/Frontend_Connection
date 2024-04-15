import React, { useState, useEffect } from 'react';
import { getStudentBatchRouter } from '../../apicalls/User';
import { toast } from 'react-toastify';
import './AttendenceList.css';
import { getAttendenceRecordRouter, updateStudentAttendenceRouter } from '../../apicalls/Student';
import { Modal, Form, Button } from 'react-bootstrap';
import Lazyloading from '../../BackendComp/Lazy';


const Attendencelist = () => {
    const [statuses, setStatuses] = useState({});
    const [data, setData] = useState([]);
    const [selectedBatch, setSelectedBatch] = useState('');
    const [attendedBatches, setAttendedBatches] = useState([]);
    const [buttonVisible, setButtonVisible] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [batch,setBatch]=useState(["Batch-1","Batch-2"]);
    const[loading,setloading]=useState(false);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [input1Value, setInput1Value] = useState('');
    const [input2Value, setInput2Value] = useState('');
    const[AttendenceRecord,setAttendenceRecord]=useState({
        date:[],
        status:[],
        trueCount:0,
        falseCount:0
    })
    let count = 0;

    const handleBatchChange = (event) => {
        setSelectedBatch(event.target.value);
        if(event.target.value==="Add_New_Batch"){
            console.log(event.target.value)
            
            handleAddNewBatch();
        }
        else{
            setButtonVisible(!attendedBatches.includes(event.target.value));
            setShowModal(false);

        }
        
    };

    const toggleStatus = (studentId) => {
        setStatuses(prevStatuses => ({
            ...prevStatuses,
            [studentId]: !prevStatuses[studentId]
        }));
        if (!attendedBatches.includes(selectedBatch)) {
            setAttendedBatches(prevBatches => [...prevBatches, selectedBatch]);
        }
    };


    


    const openDetailsModal =async (studentId) => {
        // Set the student details to be displayed in the modal
        // and open the modal
        setShowDetailsModal(true);
        const responseRecord=await getAttendenceRecordRouter(studentId);
        if(responseRecord.success===true)
        {
            setAttendenceRecord(responseRecord.data);
        }
        else{
            toast("No record found")
        }
        console.log(AttendenceRecord)
        
        // console.log(response.data);
        // setSelectedStudent(student);

    };
    

    const handleResponse = async (event) => {
        event.preventDefault();
        if (!selectedBatch) {
            toast.info('Select the batch first');
        } else {
            let arrayStatus = Object.values(statuses);
            let arrayId = Object.keys(statuses);
            let senddata = {
                status: arrayStatus,
                id: arrayId
            }
            const response = await updateStudentAttendenceRouter(senddata)
            toast.success(`Attendance for ${selectedBatch} batch is taken`);
            count = 1;
            setButtonVisible(false);
        }
    };

    const getStudentBatch = async () => {
        console.log(selectedBatch);

        if (selectedBatch !== "" && selectedBatch !== "Add_New_Batch") {
        
            console.log("coming")
            setloading(true)
            const response = await getStudentBatchRouter({
                id: sessionStorage.getItem('userId'), batch: selectedBatch
            });
              if (response)
              {
                setloading(false)
                if (response.success === true && response.data.length>0) {
                    setData(response.data);
                    const initialStatuses = {};
                    response.data.forEach(student => {
                        initialStatuses[student.id] = true;
                    });
                    setStatuses(initialStatuses);
                }
                else if(response.data.length===0) {
                    alert("There are currently no student in this batch")
                }
                
              }
            //   else{
            //     setloading(true);
            //   }
           

        }
       
    };

    useEffect(() => {


        getStudentBatch();
    }, [selectedBatch]);

    const [newbatchdata,setnewbatchdata]=useState({
        name:"",
        number:""
    })
    const handleAddNewBatchChange=(e)=>{
        const { name, value } = e.target;
        setnewbatchdata({ ...newbatchdata, [name]: value });


    }

    const handleSubmitBatch = (event) => {
        event.preventDefault();
        if(newbatchdata.name && newbatchdata.number){
            if (!batch.includes(newbatchdata.name) ) {
                setBatch([...batch, newbatchdata.name])
                setnewbatchdata({
                    name: "",
                    number: ""
                })
                setShowModal(false)
                setSelectedBatch("")
    
    
            }
            else{
                toast.info("batch name already exist")
                setShowModal(false)
                setnewbatchdata({
                    name: "",
                    number: ""
                })
                setSelectedBatch("")
            }
        }


        // setShowModal(false)
        // setnewbatchdata({
        //     name: "",
        //     number: ""
        // })

    };

    const handleChange = (event) => {
        // Add code to handle form field changes
    };

    const handleAddNewBatch = () => {
        setShowModal(true);
    };

    return (
        <div>
            <select className='batch89' id="batch" value={selectedBatch} onChange={handleBatchChange}>
                <option value="">Select Batch</option>
                {
                    batch.map((item)=>(
                        <option value={item}>{item}</option>
                    ))
                }
                
                <option value="Add_New_Batch" onClick={handleAddNewBatch}>Add New Batch</option>
            </select>
            <div className='d-flex justify-content-end mt-2 '>
                {buttonVisible && (
                    <button onClick={handleResponse} style={count === 0 ? { marginBottom: "20px" } : { display: "none" }} className='btn btn-primary'>Save Attendence</button>
                )}
                {!buttonVisible && <p className='fw-bold'>Attendence for {selectedBatch} batch is taken</p>}
            </div>

           {loading===true?(
            <Lazyloading/>
           ):(
            <table className="table table-striped">
            <thead className='head56'>
                <tr className='head56'>
                    <th className='th78'>Sl no.</th>
                    <th className='th78'>FirstName</th>
                    <th className='th78'>LastName</th>
                    <th className='th78'>Email</th>
                    <th className='th78'>Status</th>
                </tr>
            </thead>
            <tbody>
                {data.map((student, index) => (
                    <tr key={index+1}>
                        <td>{index+1}</td>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.email}</td>
                        <td>
                            {/* I want to add a button here so that whenever user hits this button a Modal
                            is opened showing details in a table having 2 columns and 2 inputs of numbers 
                            which is not editable. */}
                            <button className='btn btn-primary' onClick={()=>openDetailsModal(student.id)}>Show record</button>
                        </td>
                        <td>
                            <button onClick={() => toggleStatus(student.id)} disabled={!buttonVisible} style={{
                                border: "none",
                                color: statuses[student.id] ? "#23954A" : "red",
                                background: statuses[student.id] ? "#23954a2b" : "#E9D7D7"
                            }} className='av'>
                                <li>{statuses[student.id] ? 'Present' : 'Absent'}</li>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
           )}

            
            
            <Modal show={showDetailsModal} onHide={() => setShowDetailsModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Student Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {AttendenceRecord.status.map((status, index) => (
                                <tr key={index}>
                                    <td>{AttendenceRecord.date[index]}</td>
                                    <td>{status ? 'true' : 'false'}</td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                    <div>
                        <label>Present</label>
                        <input type="text" value={AttendenceRecord.trueCount} readOnly />
                    </div>
                    <div>
                        <label>Absent</label>
                        <input type="text" value={AttendenceRecord.falseCount} readOnly />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDetailsModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            
            
            
            
            
            
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Batch</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmitBatch}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Batch Name</Form.Label>
                            <Form.Control type="text" className='forn89'
                                name='name'
                                value={newbatchdata.name}
                                onChange={handleAddNewBatchChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Assigned Students</Form.Label>
                            <Form.Control type="text" className='forn89'
                                name='number'
                                value={newbatchdata.number}
                                onChange={handleAddNewBatchChange}
                            />
                        </Form.Group>
                        <div className='floah'>
                            <Button type="submit" className='btnhj'>
                                Save
                            </Button>
                            <Button className='btnh1j' onClick={() => {setShowModal(false); setSelectedBatch("")}}>
                                Cancel
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Attendencelist;
