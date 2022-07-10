import React from 'react'
import "./Education.css"

function Education() {

    const ithref = "https://www.iths.se/utbildningar/pythonprogrammering-for-ai-utveckling/?gclid=Cj0KCQjw8amWBhCYARIsADqZJoVbOB21vhQs54iT7hG7NchhL8xnNOPg9W4kI2YkbDOpfMD-YdC83_QaAiMbEALw_wcB"
    const komvuxhref = "https://asovuxengymnasium.stockholm/"
    const ntihref = "https://www.ntigymnasiet.se/"

    return (
        <div className='mainEducationContainer'>
            <div className='titleContainer'>
                <h1>Education</h1>
                <img src={require("../assets/purbleabcBook.png")} style={{ height: 50, alignSelf: "center" }} />
            </div>

            <div className='educationCard'>
                <div className='educationTitle'>Application development, <a href={ithref} target="_blank">IT Högskolan</a>, Stockholm <br />
                    <div className="educationDate">August 2020 - June 2022</div>
                </div>
                <div className='appdevEducationContainer'>
                    Consists of
                    <ul>
                        <li className='listItem'>
                            Create, develop and troubleshoot applications with React Native in JavaScript and TypeScript. <br />
                            Android development with Kotlin and iOS development with Swift.
                        </li>
                        <li className='listItem'>
                            Create and transform web applications with React, HTML and CSS in JavaScript.
                        </li>
                        <li className='listItem'>
                            Database management: FireStore and mySQL.
                        </li>
                        <li className='listItem'>
                            Built API from scratch using C# and mySQL.
                        </li>
                        <li className='listItem'>
                            Version control with Git. Have worked Bitbucket and GitHub.
                        </li>
                    </ul>

                    Internship at Hexa Studio (8 + 12 weeks)
                    <div>
                        <div className='periodText'>Period 1</div>
                        <ul >
                            <li className='listItem' >Create a kalkylator with <span className='underscore'>React.js</span> that kalkylated
                                annuity loans when purchasing a car per month, <br />
                                with selectable price, interest and installment period
                            </li>
                            <li className='listItem'>
                                Create a UX design for an app with Figma that was based around demands.
                            </li>
                            <li className='listItem'>
                                Start developing the app above with <span className='underscore'>React Native</span> in an existing base another employee created.
                            </li>
                        </ul>
                        <div className='periodText'>Period 2</div>
                        <ul>
                            <li className='listItem'>
                                Permission to build the same app from the ground up using <span>React Native</span>.
                            </li>
                            <li className='listItem'>
                                Work in a team with app, webb and backend developers. And learnt that good communication between <br />
                                front and backend is mandatory.
                            </li>
                            <li className='listItem'>
                                Use <span className='underscore'>Docker</span> to use API locally from backend.
                            </li>
                            <li className='listItem'>
                                Versioncontrol in <span className='underscore'>BitBucket</span>.
                            </li>
                            <li className='listItem'>
                                CRUD API.
                            </li>
                            <li className='listItem'>
                                Worked in 2 projects simultaneously.
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className='educationCard'>
                <div className='educationTitle'>
                    Math 2C + 3B, <a href={komvuxhref} target="_blank">Åsö Komvux</a>, Stockholm <br />
                    <div className="educationDate">August 2019 - May 2020</div>
                </div>
            </div>
            <div className='educationCard'>
                <div className='educationTitle'>
                    Data and Communication, <a href={ntihref} target="_blank">NTI Gymnasiet</a><br />
                    <div className="educationDate">August 2019 - May 2020</div>
                </div>
            </div>

            <div className='educationCard'>
                <div className='educationTitle'>
                    Languages <br />
                    <div className='regularText'>Swedish and English</div>
                </div>
            </div>
        </div>
    )
}

export default Education