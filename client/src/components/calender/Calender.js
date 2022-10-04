import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "react-calendar-datetime-picker/dist/index.css";
import DateTimePicker from "react-datetime-picker";

const Calender = () => {
  const [value, onChange] = useState(new Date());
  console.log(value)

  return (
    <div className="d-flex justify-content-center">
      {/* <ReactCalendar /> */}
      <div>
        {/* <Calendar />  */}
        <DateTimePicker onChange={onChange} value={value} />
      </div>
    </div>
  );
};

export default Calender;
