import './achievements.css'
import React from 'react'
import achievement_cup from '../../assets/img/icons/achievement_cup.png'
import achievement_lock from '../../assets/img/icons/achievement_lock.png';

const Achievements = () => {
  return (
    <>
    <div className="achievements-container">
      <h3 className="achievements-title">LOGROS CONSEGUIDOS</h3>
<div className="icons_achievements">
  <div className="achievement1">
    <div className="icon_picture">
      <img src={achievement_cup} alt="icon" className="icon" />
    </div>
    <div className="text_achievement">
      <h4 className="achievement_title">LOGRO</h4>
    </div>
  </div>
  <div className="achievement2">
    <div className="icon_picture">
      <img src={achievement_cup} alt="icon" className="icon" />
    </div>
    <div className="text_achievement">
      <h4 className="achievement_title">LOGRO</h4>
    </div>
  </div>

  <div className="achievement3">
    <div className="icon_picture">
      <img src={achievement_cup} alt="icon" className="icon" />
    </div>
    <div className="text_achievement">
      <h4 className="achievement_title">LOGRO</h4>
    </div>
  </div>

  <div className="achievement4">
    <div className="icon_picture">
      <img src={achievement_lock} alt="icon" className="icon" />
    </div>
    <div className="text_achievement">
      <h4 className="achievement_title">LOGRO</h4>
    </div>
  </div>

  <div className="achievement5">
    <div className="icon_picture">
      <img src={achievement_lock} alt="icon" className="icon" />
    </div>
    <div className="text_achievement">
      <h4 className="achievement_title">LOGRO</h4>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Achievements
