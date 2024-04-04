import React, { useEffect, useState } from 'react';
import TopBar from '../SideNavbar/TopBar'
import MobilemenuNavbar from '../SideNavbar/MobilemenuNavbar'
import Sidenavbar from '../SideNavbar/Sidenavbar'


import { CiSearch } from "react-icons/ci";




import { FaRegEdit } from "react-icons/fa";


import './StudentList.css'


import Dropdown from 'react-bootstrap/Dropdown';



import { RiDeleteBin5Line } from 'react-icons/ri';


import { Col, Container, Nav, Row, Stack, Pagination, Form, Modal, Button } from 'react-bootstrap'
import { DeleteStudentRouter } from '../../apicalls/Student';
import Lazyloading from '../../BackendComp/Lazy';
const StudentList = ({ userData }) => {


    // const itemsPerPage = 8; // Change this to the desired number of items per page
    // const [currentPage, setCurrentPage] = useState(1);
    const [searchTitle, setSearchTitle] = useState('');

    const [data, setData] = useState([]);
    console.log('data1', data);
    const [search, SetSearch] = useState('');
    const [filter, setFilter] = useState([]);





    //------------------------------------

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10); // Number of cards per page
    const [searchTerm, setSearchTerm] = useState('');
    const [filterValue, setFilterValue] = useState('');
    const [priceFilter, setPriceFilter] = useState('');
    const [emaildata, setEmailData] = useState({
        email: ""
    });

    // Filter and search logic
    const filteredData = data.filter((value) =>
        // value.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterValue === '' || value._id === filterValue)
    );

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const paginatedData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const [show, setShow] = useState(false);

    // Unique categories for filter dropdown
    const uniqueCategories = [...new Set(data.map(item => item._id))];

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [loading,setloading]=useState(false);

    const handleItemsPerPageChange = (selectedValue) => {
        setItemsPerPage(selectedValue);
        setCurrentPage(1); // Reset current page when changing items per page
    };

    const handleDeleteStudent = async (recieve) => {
        // setloading(true);
        // console.log(loading)
        //const data=
        let emaildata = { email: recieve }
        const response = await DeleteStudentRouter(emaildata);
        if (response.success === true) {
            alert(response.deletedStudent.email + "  is deleted successfully")
            getProduct()
        }
        //console.log()

    }

    useEffect(()=>{
        setloading(true);


    },[])






    const getProduct = async () => {
        try {
            const req = await fetch("https://tutor-octopus-1.onrender.com/student/read");
            const res = await req.json();
            setData(res);
            setFilter(res);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getProduct();
    }, []);


    const handleSubmit=()=>{
        console.log("I will work on it")
    }
    const handleChange=()=>{
        console.log("I will work on it")
    }

    ///////morning  code
    // const filteredData = data.filter(value => value._id.toLowerCase().includes(searchTitle.toLowerCase()));

    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;


    // Slice the data based on the calculated index range
    // const paginatedData = filteredData.slice(startIndex, endIndex);





    const handleTitleChange = (value) => {
        setSearchTitle(value);
        setCurrentPage(1); // Reset to the first page when the title filter changes
    };

    // useEffect(() => {
    //     const result = data.filter((item) => {
    //         return item.title.toLowerCase().match(search.toLocaleLowerCase());
    //     });
    //     setFilter(result);
    // }, [search]);




    const onButtonClick = () => {
        const pdfUrl = "example.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "example.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };




























    return (
        <div>


            <Container >
                <Row>


                    <Col sm={12}>




                        <Stack direction="horizontal" gap={3} className='row56'>

                            <div className="p-2 ms-auto">
                                <div >


                                </div>
                            </div>
                        </Stack>


                        <Stack direction="horizontal" gap={3} className='row56 bbrow'  >
                            <div> <Dropdown className="">
                                <Dropdown.Toggle variant="" id="dropdown-basic" className='filter45 text-white'>
                                    Montrer :  {itemsPerPage}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => handleItemsPerPageChange(5)}>5</Dropdown.Item>
                                    <Dropdown.Item onClick={() => handleItemsPerPageChange(10)}>10</Dropdown.Item>
                                    <Dropdown.Item onClick={() => handleItemsPerPageChange(15)}>15</Dropdown.Item>
                                    <Dropdown.Item onClick={() => handleItemsPerPageChange(20)}>20</Dropdown.Item>
                                    <Dropdown.Item onClick={() => handleItemsPerPageChange(25)}>25</Dropdown.Item>
                                    {/* Add more options as needed */}
                                </Dropdown.Menu>
                            </Dropdown></div>

                            {/* <div className="p-2"><Row>
                                            <Col> <Form.Control
                                                type="text"
                                                placeholder="Rechercher"
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)} className='reacherch56'
                                            /></Col>
                                            <Col>
                                                <CiSearch className='reacherch561' style={{ color: "black" }} />
                                            </Col>
                                        </Row></div> */}


                        </Stack>





                        {/* Filter dropdown */}


                        <div style={{ overflowX: "auto" }}>
                            <table className="table table-striped">
                                <thead className='head56'>
                                    <tr className='head56'>

                                        <th className='th78'>Sl no.</th>
                                        <th className='th78'>FirstName</th>
                                        <th className='th78'>LastName</th>
                                        <th className='th78'> Email</th>
                                        <th className='th78'>Gender</th>


                                        <th className='th78'>Action</th>
                                    </tr>
                                </thead>
                                {
                                    data.length===0?(
                                        <center>
                                            <Lazyloading/>
                                        </center>
                                    ):(
                                        <tbody>

                                        {paginatedData.map((value, index) => {
    
                                            return (
    
                                                <tr key={value._id}>
    
                                                    <td>{index + 1 + (currentPage - 1) * 10}</td>
                                                    <td>{value.firstName}</td>
                                                    <td>{value.lastName}</td>
                                                    <td >{value.email}</td>
                                                    <td>{value.gender}</td>
    
                                                    <td >
                                                        <button onClick={handleShow} className="btn btn-" >
                                                            <FaRegEdit />
                                                        </button>
                                                        <button onClick={() => handleDeleteStudent(value.email)} className="btn btn-" >
                                                            <RiDeleteBin5Line />
                                                        </button>
                                                    </td>
    
    
                                                </tr>
    
    
                                            )
                                        })
    
                                        }
    
    
                                    </tbody>


                                    ) 
                                }
                               
                            </table>
                        </div>

                        {/* Modal for editing page */}
                        {/* <Modal show={show} onHide={handleClose} animation={false}>
                            <Modal.Header closeButton>
                                <Modal.Title><h5>Edit Student Details</h5></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>



                            </Modal.Body>

                        </Modal> */}


                        <Stack direction="horizontal" gap={3} className='row56'>
                            <div className="p-2"></div>
                            <div className="p-2 ms-auto"></div>
                            <div className="p-2">
                                {/* Pagination */}
                                <Pagination>
                                    {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }).map((_, index) => (
                                        <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                                            {index + 1}
                                        </Pagination.Item>
                                    ))}
                                </Pagination>
                            </div>
                        </Stack>















                    </Col>

                </Row>
            </Container>






        </div>

    )
}

export default StudentList