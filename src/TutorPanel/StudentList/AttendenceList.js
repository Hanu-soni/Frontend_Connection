import React, { useState, useEffect } from 'react';
import { getStudentBatchRouter } from '../../apicalls/User';
import { toast } from 'react-toastify';
import './AttendenceList.css';
import { updateStudentAttendenceRouter } from '../../apicalls/Student';
import { Modal, Form, Button } from 'react-bootstrap';

const Attendencelist = () => {
    const [statuses, setStatuses] = useState({});
    const [data, setData] = useState([]);
    const [selectedBatch, setSelectedBatch] = useState('');
    const [attendedBatches, setAttendedBatches] = useState([]);
    const [buttonVisible, setButtonVisible] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [batch,setBatch]=useState(["Batch-1","Batch-2"]);
    let count = 0;

    const handleBatchChange = (event) => {
        setSelectedBatch(event.target.value);
        if(event.target.value==="Add_New_Batch"){
            console.log(event.target.value)
            handleAddNewBatch();
        }
        else{
            setButtonVisible(!attendedBatches.includes(event.target.value));
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
        const response = await getStudentBatchRouter({
            id: sessionStorage.getItem('userId'), batch: selectedBatch
        });
        if (response.success === true && response.data.length>0) {
            setData(response.data);
            const initialStatuses = {};
            response.data.forEach(student => {
                initialStatuses[student.id] = true;
            });
            setStatuses(initialStatuses);
        }
        else  {
            alert("There are currently no student in this batch")
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
        setBatch([...batch,newbatchdata.name])
        setnewbatchdata({
            name:"",
            number:""
        })
        setShowModal(false)
        
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
                        <tr key={index}>
                            <td>{}</td>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.email}</td>
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
                            <Button className='btnh1j' onClick={() => setShowModal(false)}>
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
