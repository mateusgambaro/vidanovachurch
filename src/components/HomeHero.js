import React, { useState } from "react";
import "./HomeHeroStyles.css";
import { FaCross } from "react-icons/fa";
import { Modal } from "antd";
import ClassScheduleCard from "./Schedule";

function HomeHero(props) {
  const [modal2Open, setModal2Open] = useState(false);

  const dayAndHour = [
    {
      day: "Segunda-feira",
      time: "15h00",
      discipline: "Tarde do Clamor"
    },
    {
      day: "Quarta-feira",
      time: "20h00",
      discipline: "Culto"
    },
    {
      day: "Sexta-feira",
      time: "19h30",
      discipline: "Culto"
    },
    {
      day: "Domingo",
      time: "18h00",
      discipline: "Culto"
    }
  ];
  return (
    <>
      <div className="hero-background">
        <img
          src={props.coverImg}
          alt="Background Cover"
          className="background-image"
          loading="lazy"
        />
        <div className={props.cName}>
          <div className="hero-content">
            <div className="hero-text">
              <h1>{props.title}</h1>
              <h2>{props.subtitle}</h2>
              <button className={props.btnClass} onClick={() => setModal2Open(true)}>
                <FaCross className="whatsapp-icon" /> {props.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title="Horários do culto"
        centered
        style={{ top: 20 }}
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        footer={null}
      >
        {dayAndHour.map((date) => (
          <ClassScheduleCard
            day={date.day}
            time={date.time}
            subject={date.discipline}
          />
        ))}
      </Modal>
    </>
  );
}

export default HomeHero;
