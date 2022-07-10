import React from 'react'
import { Link } from 'react-router-dom'
import "./Work.css"

function ProjectComponent({ title, src, link }) {
    return (
        <div>
            <div className='projectTitle'>{title}</div>
            <Link to={link} className='project'>
                <img src={src} className="projectGif" />
            </Link>
        </div>
    )
}

export default ProjectComponent