import "./introCourse.css";
import React from "react";
import ReactPlayer from 'react-player';

const IntroCourse = () => {
  return (
    <>
      <div className="introCourse-container">
        <section className="introCourse-content">
          <h2 className="introCourse-title">INTRO</h2>
          <div className="course">
            <div className="course_video">
              <button className="video">
                <ReactPlayer
                  className="player"
                  url="https://youtu.be/ua6mkxO9GxQ?si=nYoHqf4C6fdeWBP2"
                  controls={true}
                  width="100%"
                  height="99%"
                />
                VISUALIZACIÓN 1 - INTRODUCCIÓN A LA MEDITACIÓN
              </button>
              {/* <p className="video_title">VISUALIZACIÓN 1 - INTRODUCCIÓN A LA MEDITACIÓN </p> */}
            </div>
            <div className="course_video">

              <button className="video">
                <ReactPlayer
                  className="player"
                  url="https://youtu.be/57vkPyFsiUg?si=lE8YPsPuFdU5vt7T"
                  controls={true}
                  width="100%"
                  height="99%"
                />
                VISUALIZACIÓN 2 - INTRODUCCIÓN A LA MEDITACIÓN DE PIE
              </button>
              {/* <p className="video_title">VISUALIZACIÓN 2 - INTRODUCCIÓN A LA MEDITACIÓN DE PIE </p> */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default IntroCourse;
