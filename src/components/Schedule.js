import React from "react";
import "./ClassScheduleCard.css";

const ClassScheduleCard = ({ day, time, subject }) => {
  return (
    <div className="class-schedule-card">
      <div>
        <div className="class-day">{day}</div>
        <div className="class-time">{time}</div>
      </div>
      <strong className="class-subject">{subject}</strong>
    </div>
  );
};

export default ClassScheduleCard;
