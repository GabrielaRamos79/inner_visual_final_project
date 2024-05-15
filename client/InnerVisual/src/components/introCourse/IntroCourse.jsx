import './introCourse.css'
import React from 'react'

const IntroCourse = () => {
  return (
    <>
      <div className="introCourse">
        <h3 className="introCourse-title">INTRO</h3>
        <div className="course">
          <div className="course_video">
            <div className="button"><button className='video'>VIDEO 1</button>
              <p className="video_title">VIZUALIZACION 1 - INTRO </p>
            </div>
          </div>
          <div className="course_video">
            <div className="button"><button className='video'>VIDEO 2</button>
              <p className="video_title">MÉTODO 1 - INTRO </p>
            </div>
          </div>
        </div>
      </div>
      <p>Introducción al curso</p>
    </>
  )
}

export default IntroCourse
