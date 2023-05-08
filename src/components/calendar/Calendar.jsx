import React from "react";
import styled from 'styled-components'
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState, useEffect, useRef} from "react";
import { v4 as uuid } from "uuid";


const Wrapper = styled.div`
width : 100%;
padding-top : 10px;
padding-right : 10px;
// border : 2px solid red;
.fc-header-toolbar{
    font-size : 13px;
}
`



const Calendar = () => {
const calendarRef = useRef(null);

const handleDateClick = (arg) => {
  const title = prompt('Enter event title:');
  if (title) {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.addEvent({
      title,
      start: arg.date,
      allDay: arg.allDay
    });
  }
};



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
    </Wrapper>


  );
}

export default Calendar;