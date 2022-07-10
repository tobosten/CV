import React from 'react'
import "./LeagueOfInfo.css"

function LeagueOfInfo() {
    return (
        <div>
            <div className='screenFieldContainer'>
                <div className='viewsContainer'>
                    <div className='screenFieldText'>
                        First shown screen. Search for any user within the selected regions (EUW and EUNE). <br />
                        Fetches the searched user from the API and uses AsyncStorage to store last searched <br />
                        user for easier login next time.
                    </div>
                    <div className="screenFieldGif">
                        <img src={require("../assets/loiGifs/login.gif")} className="loiGif" />
                    </div>
                </div>

                <div style={{ height: 1, width: "90%", backgroundColor: "lightgray", marginBottom: 50, marginTop: 50, alignSelf: "center" }} />

                <div className='viewsContainer'>
                    <div className="screenFieldGif">
                        <img src={require("../assets/loiGifs/userDetails.gif")} className="loiGif" />
                    </div>
                    <div className='screenFieldText'>
                        In this screen the user can see basic information of the searched one. Name, icon, level, border, rank and their <br />
                        most played character. The border alternates depending on which level the user has reaches. All information of the user is stored as
                        object in Context.
                    </div>
                </div>

                <div style={{ height: 1, width: "90%", backgroundColor: "lightgray", marginBottom: 50, marginTop: 50, alignSelf: "center" }} />

                <div className='viewsContainer'>
                    <div className='screenFieldText'>
                        Here the user can scroll through all characters in the game, and select a specifik one for additional information.<br />
                        You are also able to search for your character, and use the "?" button for instructions to reset the list. <br />
                        All images are stored locally in an object.
                    </div>
                    <div className="screenFieldGif">
                        <img src={require("../assets/loiGifs/champSearch.gif")} className="loiGif" />
                    </div>
                </div>


                <div style={{ height: 1, width: "90%", backgroundColor: "lightgray", marginBottom: 50, marginTop: 50, alignSelf: "center" }} />

                <div className='viewsContainer'>
                    <div className="screenFieldGif">
                        <img src={require("../assets/loiGifs/champDetails.gif")} className="loiGif" />
                    </div>
                    <div className='screenFieldText'>
                        This screen is shown when selecting a character from the search screen, in this case it shows the character Jhin.<br />
                        Here the user sees additional information on the selected champion. When entering this screen it starts fetching the current
                        character's data and saves their json into an object.
                    </div>
                </div>


                <div style={{ height: 1, width: "90%", backgroundColor: "lightgray", marginBottom: 50, marginTop: 50, alignSelf: "center" }} />

                <div className='viewsContainer'>
                    <div className='screenFieldText'>
                        Shows all 10 latest matched played on the account, and additional 9 if the user presses "More Matches" button.<br />
                        Everything in this screen is fetching data from the API, except for the character image. Each card displays basic information from
                        each match. For example, if they won or lost, played character and items purchased.
                    </div>
                    <div className="screenFieldGif">
                        <img src={require("../assets/loiGifs/matchHistory.gif")} className="loiGif" />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default LeagueOfInfo