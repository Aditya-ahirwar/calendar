import React from "react";
import styled from 'styled-components'
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState, useRef} from "react";
const Wrapper = styled.div`
width : 100%;
padding-top : 10px;
padding-right : 10px;
// border : 2px solid red;
.fc-header-toolbar{
    font-size : 13px;
}
position : relative;
`
const Popup = styled.div`
position : absolute;
top : 0;
left : 0;
right : 0;
bottom : 0;
z-index : 10;
// background-color : rgba(128, 128, 128, 0.62);
display : flex;
justify-content : center;
align-items : center;
`
const Form = styled.form`
display : flex;
flex-direction : column;
justify-content : center;
align-items : center;
gap : 20px;
height : 300px;
width : 300px;
background-color : #cacacc;

-webkit-box-shadow: 0px 0px 4px 1px rgba(0,0,0,1);
-moz-box-shadow: 0px 0px 4px 1px rgba(0,0,0,1);
box-shadow: 0px 0px 4px 1px rgba(0,0,0,1);


`

const Input = styled.input`
height : 30px;
border : none;
width : 170px;
border-radius : 4px;
`
const Submit = styled.div`
display : flex;
height : 30px;
width : 170px;
background-color : blue;
font-size : 16px;
color : white;
align-items : center;
justify-content : center;
border-radius : 4px;

`


const Calendar = () => {
const calendarRef = useRef(null);
const [currEvent, setEvent] = useState('');
const [open, setOpen] = useState(false);
const [currDate, setCurrDate] = useState({})
const [currAllDay, setCurrDay] = useState({})
const [currTime, setCurrTime] = useState({})
const [currDuration, setCurrDuration] = useState(0)

const handleDateClick = (arg) => {
  setCurrDate(arg.date)
  setCurrDay(arg.allDay)
  setOpen(true)
};

const handleSubmit = (e) =>{
e.preventDefault();
const calendarApi = calendarRef.current.getApi();
calendarApi.addEvent({
  title : currEvent,
  time : currTime,
  duration : currDuration,
  start: currDate,
  allDay : currAllDay
});
setOpen(false)
}




  return (
    <Wrapper>
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next title",
          center: "timeGridDay, timeGridWeek, dayGridMonth", 
          end:""
        }}
        editable
        selectable
        height={"90vh"}
        dateClick={handleDateClick}
        ref={calendarRef}
      />
      {open && 
      <Popup>
        <Form>
          <Input placeholder="Patient's Name" name="name" onChange={(e) => {e.preventDefault();setEvent(e.target.value)}}/>
          <Input type="date" onChange={(e) => {setCurrDate(e.target.value)}}/>
          <Input type="time" onChange={(e) => {setCurrTime(e.target.value)}}/>
          <Input type="number" onChange={(e) => {setCurrDuration(e.target.value)}}/>
          <Submit onClick={handleSubmit}>submit</Submit>
        </Form>
        </Popup>
      }
    </Wrapper>



  );
}

export default Calendar;