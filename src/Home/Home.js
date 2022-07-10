import React from 'react'
import "./Home.css"
import Background from "../assets/HomeBackground/hexawhite.webp"

function Home() {
    return (
        <div className='homeMainContainer' style={{ /*  backgroundImage: `url(${Background})` */  }}>
            <div className='homeInfoContainer'>
                <div className='homeLeftInfo'>
                    <div>
                        <h1>Hello!<br /> My name it Tobias Österlin</h1>
                        <h3 style={{ fontSize: 20, marginTop: -15 }}>I do development with React Native and React.js</h3>
                        <div className='mediaLinksContainer'>

                            <a className='separateLinkContainer' href='https://www.linkedin.com/in/tobias-%C3%B6sterlin-988196183/' target="_blank">
                                <img src={require("../assets/linkedInLogo.png")} style={{ height: 40 }} />
                            </a>
                            <a className='separateLinkContainer' href='https://github.com/tobosten?tab=repositories' target="_blank">
                                <img src={require("../assets/githubLogo.png")} style={{ height: 40 }} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='homeRightInfo'>
                    <div className='meImageContainer'>
                        <img src={require("../assets/Me.jpg")} className="meImage" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home