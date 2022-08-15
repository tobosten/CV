import React from 'react'
import "./ActionPriorities.css"

function ActionPriorities() {
    return (
        <div>
            <div className='screenFieldContainer'>
                <div className="leagueofinfoTitle">Action Priorities</div>

                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div className='leagueofinfoLinkField'>Project is on <a href='https://github.com/tobosten/ActionPriorities' target="_blank">GitHub</a></div>
                    <img src={require("../assets/handLeftPoint.png")} style={{ height: 20, width: 25, marginLeft: 10 }} />
                </div>
                <div className='leagueofinfoUnderTitleText'>This app is a notification app where you can create reminders for yourself
                    everyday, or a specific date. <br />
                    Uses AsyncStorage and <a href="https://github.com/zo0r/react-native-push-notification" target="_blank">local notifications</a>
                </div>

                <div className='viewsContainer'>
                    <div className='screenFieldText'>
                        Start screen. Uses react navigation to direct user to next screen. Animated and useRef are used to do animation.
                    </div>
                    <div className="screenFieldGif">
                        <img src={require("../assets/APGifs/start.gif")} className="loiGif" />
                    </div>
                </div>

                <div style={{ height: 1, width: "90%", backgroundColor: "lightgray", marginBottom: 50, marginTop: 50, alignSelf: "center" }} />

                <div className='viewsContainer'>
                    <div className="screenFieldGif">
                        <img src={require("../assets/APGifs/create-reminders.gif")} className="loiGif" />
                    </div>
                    <div className='screenFieldText'>
                        Here you can add reminders (notifications). For each reminder you create a custom title and message, you also select which date the reminder will fire.
                        If the "Daily Repeat" button is selected, the reminder will continue everyday at the set time.
                    </div>
                </div>

                <div style={{ height: 1, width: "90%", backgroundColor: "lightgray", marginBottom: 50, marginTop: 50, alignSelf: "center" }} />

                <div className='viewsContainer'>
                    <div className='screenFieldText'>
                        In the screen you can also deactivate/activate and remove reminders.
                    </div>
                    <div className="screenFieldGif">
                        <img src={require("../assets/APGifs/deactivate-remove.gif")} className="loiGif" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ActionPriorities;