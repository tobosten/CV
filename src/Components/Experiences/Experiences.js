import React from 'react'
import "./Experiences.css"


function Experiences({ title, date, content }) {
  return (
    <div style={{}}>
      <div className='experienceTitle'>{title}</div>
      <div className='dateText'>{date}</div>
      {content}
    </div>
  )
}

export default Experiences