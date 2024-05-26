import "./introCourse.css";
import React from "react";


const IntroCourse = () => {
  return (
    <>
      <div className="introCourse-container">
        <section className="introCourse-content">
          <h2 className="introCourse-title">INTRO</h2>
          <div className="course">
            <div className="course_video">
              <button className="video">VÍDEO 1</button>
              <p className="video_title">VIZUALIZACIÓN 1 - INTRO </p>
            </div>
            <div className="course_video">
              <button className="video">VÍDEO 2</button>
              <p className="video_title">MÉTODO 1 - INTRO </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default IntroCourse;
