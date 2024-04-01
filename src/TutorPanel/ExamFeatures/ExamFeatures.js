import React, { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CiShare2 } from 'react-icons/ci'
import { IoIosNotificationsOutline, IoMdArrowDropdown } from 'react-icons/io'
import { Card, Container, Dropdown, Form, Navbar, Stack } from 'react-bootstrap'
import '../OnlineResources.css'
import './ExamFeatures.css'
import MobilemenuNavbar from '../SideNavbar/MobilemenuNavbar'
import Sidenavbar from '../SideNavbar/Sidenavbar'
import TopBar from '../SideNavbar/TopBar'

import Chart from 'chart.js/auto'
import { GoDotFill } from 'react-icons/go'
const ExamFeatures = ({userData}) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const navigate=useNavigate();
  

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(myChartRef, {
      type: 'doughnut',
      data: {
        // labels: [
        //     'Fail',
        //     'Pass'

        // ],

        datasets: [{

          data: [40, 80],
          backgroundColor: [
            '#5CB9B1',
            '#F56954'

          ],
        }
        ]

      }

    });
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();

      }
    }


  }, [])


  
  // useEffect(()=>{
  //   if(!sessionStorage.getItem('token')){
  //     alert('YOU ARE NOT LOGGED IN! KINDLY LOGIN! CLICK OK BUTTON 2 TIMES');
  //     console.log("check")
  //     navigate('/Login')
  //     console.log("check")
      
  //   }

  // },[])
  return (
    <div>
      <MobilemenuNavbar userData={userData} />

      <div class="container-fluid">
        <div class="row">
          <nav class="col-md-3 d-none d-md-block bg-light sidebar">
            <Sidenavbar  />
          </nav>
          <main role="main" class="col-md-8 col-lg-9 sidebar5">
            <TopBar userData={userData} />
            <div className="dashboard-header px-md-4" style={{ padding: "0px 0px 70px 0px" }}>
              {/* <h1 className="h2">Dashboard</h1> */}
              <Card className='addnewcard899'>

                <Card.Body className='addstutnet1'>


                  <div className="wrapper34">


                    <section className="columns1">

                      <div className="column1">
                        <div className="box2098">
                          <p><b>Select Exam</b></p>
                          <Form.Select aria-label="Default select example">
                            <option>Type</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select> </div></div>

                      <div className="column1">
                        <div className="box2099">
                          <h4 className='text-center type2'>55</h4>
                          <p className='text-center type3'>Passing Students</p>
                        </div>
                      </div>

                      <div className="column1">
                        <div className="box20999">
                          <img src='./img/imgy.png' className='imgpy' />
                          <p className='text-center type3'>Result Card</p>
                        </div>
                      </div>

                    </section>



                  </div>

                  <div className="wrapper34">


                    <section className="columns1">

                      <div className="column1">
                        <div className="box20888">
                          <div className="wrapper2">


                            <section className="columns2 ">



                              <div className="column2 cbn">
                                <h5 className='examfinal1'>Exam Final<br></br> Result</h5>

                              </div>

                              <div className="column2 cbn">
                                <img src='./img/examfinal.png' className='examfinal' />
                              </div>

                            </section>



                          </div>

                        </div></div>

                      <div className="column1">
                        <div className="box208888">
                          <div className="wrapper2">


                            <section className="columns2">



                              <div className="column2">
                                <h5 className='examfinal1'>Check merit <br></br>list here</h5>

                              </div>

                              <div className="column2">
                                <img src='./img/check1.png' className='examfinal' /> </div>

                            </section>



                          </div>
                        </div>
                      </div>


                    </section>



                  </div>


                  <div className="wrapper34">


                    <section className="columns1">

                      <div className="column1">
                        <div className="box20982">
                          <h5>Result</h5>
                          <canvas ref={chartRef} style={{ width: "10px", height: "50px" }} />

                          <Stack direction="horizontal" gap={3}>

                            <div className="ms-auto bnnnui">
                              <p style={{ fontSize: "18px", margin: "0px" }}><GoDotFill style={{ fontSize: "30px", color: "#F56954" }} /> Fail</p>
                              <p style={{ fontSize: "18px" }}><GoDotFill style={{ fontSize: "30px", color: "#5CB9B1" }} /> Pass</p>
                            </div>
                          </Stack>

                        </div></div>

                      <div className="column1">
                        <div className="box20982">
                          <img src='./img/sound.png' className='siund4' />
                          <ul>
                            <li>Results declared on 24th March</li>
                            <li>Marks have been sent to your register E-mail ID</li>
                            <li>Complete results have been shared Via SMS and Mail</li>
                          </ul>
                        </div>
                      </div>


                    </section>



                  </div>


                </Card.Body>
              </Card>

            </div>



          </main>
        </div>



      </div>
    </div>
  )
}

export default ExamFeatures
