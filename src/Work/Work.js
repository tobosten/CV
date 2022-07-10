import React from 'react'
import "./Work.css"
import ProjectComponent from './ProjectComponent'

function Work() {
    return (
        <div>
            <div className='projectContainer'>
                <ProjectComponent
                    title="League of Info"
                    src={require("../assets/LeagueOfInfo.gif")}
                    link={"/leagueofinfo"}
                />
            </div>
        </div>
    )
}

export default Work