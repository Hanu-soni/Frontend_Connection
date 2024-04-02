import React, { useState } from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import MobilemenuNavbar from '../SideNavbar/MobilemenuNavbar'
import Sidenavbar from '../SideNavbar/Sidenavbar'
import TopBar from '../SideNavbar/TopBar'
import './Event_Calendar.css'
import { Card } from 'react-bootstrap'
const localizer = momentLocalizer(moment)


const Event_Calendar = ({ userData }) => {
  const [events, setEvents] = useState([]);
  const [ShowModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventTitle, setEventTitle] = useState('');
  const [selectEvent, setSelectEvent] = useState(null);

  const handleSelectSlot = (slotInfo) => {
    setShowModal(true);
    setSelectedDate(slotInfo.start);
    setSelectEvent(null);
  }
  const handleSelectEvent = (event) => {
    setShowModal(true);
    setSelectEvent(event);
    setEventTitle(event.title);
  }

  const saveEvent = () => {
    if (eventTitle && selectedDate) {
      if (selectEvent) {
        const updatedEvent = { ...selectEvent, title: eventTitle };
        const updatedEvents = events.map((event) =>
          event === selectEvent ? updatedEvent : event

        );
        setEvents(updatedEvents);
      } else {
        const newEvent = {
          title: eventTitle,
          start: selectedDate,
          end: moment(selectedDate).add(1, 'hours').toDate(),

        };
        setEvents([...events, newEvent]);
      }
      setShowModal(false);
      setEventTitle('');
      setSelectEvent(null)
    }
  };

  const deleteEvents = () => {
    if (selectEvent) {
      const updatedEvents = events.filter((event) => event !== selectEvent);
      setEvents(updatedEvents);
      setShowModal(false);
      setEventTitle('');
      setSelectEvent(null);
    }
  }


  return (
    <div>
      <MobilemenuNavbar userData={userData} />
      <div class="container-fluid">
        <div class="row">
          <nav class="col-md-3 d-none d-md-block bg-light sidebar">
            <Sidenavbar />
          </nav>
          <main role="main" class="col-md-8 col-lg-9 sidebar5">
            <TopBar userData={userData} />

            <div class="dashboard-header px-md-4" style={{ padding: "0px 0px 70px 0px" }}>
              <Card className='addnewcard09'>

                <Card.Body className='addstutnet109'>
                  <div style={{ height: "500px" }}>
                    <Calendar
                      localizer={localizer}
                      events={events}
                      startAccessor="start"
                      endAccessor="end"
                      style={{ margin: "50px" }}
                      selectable={true}
                      onSelectSlot={handleSelectSlot}
                      onSelectEvent={handleSelectEvent}
                    />



                    {ShowModal && (
                      <div class="modal" style={{
                        display: "block", backgroundColor: "gary",
                        position: "fixed", top: 0, border: 0, left: 0, right: 0
                      }}>
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title">
                                {selectEvent ? 'Edit Event' : 'Add Event'}
                              </h5>
                              <button type="button" class="btn-close"
                                onClick={() => {
                                  setShowModal(false)
                                  setEventTitle('');
                                  setSelectEvent(null);

                                }
                                }
                              ></button>
                            </div>
                            <div class="modal-body">
                              <label>
                                Event Title
                              </label>
                              <input
                                type='text' className='form-control'
                                id='eventTitle'
                                value={eventTitle}
                                onChange={(e) => setEventTitle(e.target.value)}
                              />
                            </div>
                            <div class="modal-footer">
                              {selectEvent && (
                                <button
                                  type='button'
                                  className='btn btn-danger me-2'
                                  onClick={deleteEvents}
                                >
                                  Delete Event
                                </button>
                              )}
                              <button type="button" onClick={saveEvent}
                                className='btn btn-primary'>Save changes</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </div>




          </main>
        </div>

      </div >

    </div >

  )
}

export default Event_Calendar

