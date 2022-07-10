import React from 'react'
import "./Home.css"
import LakeImg from "../assets/lake.png"

function Home() {
    /* style={{ backgroundImage: `url(${LakeImg})` }} */
    return (
        <div className='mainContainer'>
            <div className='topContainer'>
                <h1 className='introduction'>Hello! <br />
                    My name is Tobias Österlin <br />
                    <div style={{ fontSize: 20, marginTop: 10 }}>
                        I do development with React Native and React.js
                    </div>

                    <div className='linksContainer'>
                        <a href='https://www.linkedin.com/in/tobias-%C3%B6sterlin-988196183/' target="blank"
                            className='mediaLinks'>
                            <img src={require("../assets/linkedInLogo.png")} style={{ height: 40 }} />
                        </a>

                        <a href='https://github.com/tobosten?tab=repositories' target="blank"
                            className='mediaLinks'>
                            <img src={require("../assets/githubLogo.png")} style={{ height: 40 }} />
                        </a>
                    </div>

                </h1>
                <div className="imageContainer">
                    <div className='meImage'>
                        <img src={require("../assets/Me.jpg")} className="meImage" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home