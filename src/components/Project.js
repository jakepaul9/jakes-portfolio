import React from 'react'
import './Project.css'

const Project = (props) => {
  return (
    <div className='project-container'>
      <div className='project-title'>
        <h2>{props.title}</h2>
      </div>
      <div className='project-image'>
        <img src={props.image} alt='project' />
      </div>
      <div className='project-description'>{props.children}</div>
    </div>
  )
}

export default Project
