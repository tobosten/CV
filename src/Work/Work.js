import React from 'react'
import "./Work.css"
import ProjectComponent from './ProjectComponent'

function Work() {
    return (
        <div>
            <div className='projectContainer'>
                <div style={{ margin: 10 }}>
                    <ProjectComponent
                        title="League of Info"
                        src={require("../assets/LeagueOfInfo.gif")}
                        link={"/leagueofinfo"}
                    />
                </div>

                <div style={{ margin: 10 }}>
                    <ProjectComponent
                        title="Action Priorities"
                        src={{}}
                        link={"/actionpriorities"}
                    />
                </div>

            </div>
        </div>
    )
}

export default Work