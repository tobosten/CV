import React from 'react'
import Experiences from '../Components/Experiences/Experiences'
import DotField from '../Components/DotField/DotField'
import "./CV.css"

function CV() {

    const univertityUrl = "https://www.iths.se/utbildningar/pythonprogrammering-for-ai-utveckling/?gclid=CjwKCAjw2f-VBhAsEiwAO4lNeAj6e7jyD1Pgsg4l20L9Ib5hwIlB8yIlAzsDlzEjzHcj4FQNxt3OyRoCSHgQAvD_BwE"
    const email = "tobbe.osterlin@gmail.com"
    const phone = "0708990404"
    const address = "Backvägen 7"
    const age = "21"

    const fields = ["E-mail:", "Telefon:", "Adress:", "Ålder:"]
    const info = [email, phone, address, age]


    return (
        <div style={{ backgroundColor: "#F4F4F4", display: "flex", flexDirection: "row" }}>
            <div className='cvContainer' >
                <div className='topContainer'>
                    <div className="characterContainer">
                        <img src={require("../assets/pfp.jpg")} className='profileImage' />

                        <div className='characterText'>Tobias Österlin</div>
                        <div className="jobTitle">Applikationsutvecklare</div>
                    </div>
                    <div style={{ backgroundColor: "black", width: 1, marginTop: 50 }} />{/* divider */}
                    <div className='introductionContainer'>
                        <div className='introductionTitle'>Sammanfattning</div>
                        <div className='introductionText'>
                            Jag har precis tagit examen som en Applikationsutvecklare från
                            <a href={univertityUrl} target="blank" className='universityLink'>IT-Höskolan</a>
                            i Stockholm. Gillar att utveckla intressanta applikationer med React Native men även hemsidor med React.js.
                            React Native har jag mer erfarenhet av då jag arbetade med under hela andra perioden av min praktik.
                            Som preson är jag både glad, trevlig och hjälpsam då jag gärna hjälper till min bästa förmåga om det
                            uppstått något problem.
                        </div>
                        <div className='contactContainer'>
                            <div className='contactInfoTitle'>Kontaktinformation</div>
                            <div className='contactInformationContainer'>
                                <div className='contactFieldsContainer'>
                                    {
                                        fields.map((fields) => (
                                            <div>
                                                {fields}
                                            </div>
                                        ))
                                    }
                                </div>
                                <div>
                                    {
                                        info.map((info) => (
                                            <div>{info}</div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: "black", height: 1, width: "90%", marginLeft: "auto", marginRight: "auto" }} /> {/* divider */}
                <div className='bottomContainer'>
                    <div className='bottomTitles'>Arbetserfarenhet</div>
                    <Experiences
                        title={"Praktik, Hexa Studio (Dotterföretag till Smode AB)"}
                        date={"12 + 8 veckor, 2 perioder"}
                        content={
                            <>
                                <DotField
                                    text={"Under period 1: React.js för att skapa en kalkylator som räknar ut annuitetslån för bilköpare beroende kostnad och ränta." +
                                        " När räknaren var färdig fick jag och en annnan praktikant 2 pdf filer som förklarade vyers namn, och vad de skulle innehålla." +
                                        " Därefter skapade vi appens design (wireframes) med Figma. När designen var färdig fick vi en uppsatt grund i React Native för appen vi skulle utveckla."}
                                />
                                <DotField
                                    text={"Period 2: Byggde upp period 1 appen från grunden med React Native tillsammans med en yttersligare praktikant. Under denna period" +
                                        " hade vi även ett praktikant team med app, webb och backend utvecklare. Backend producerade endpoints till ett API vi använde lokalt med Docker." +
                                        " Versionshantering hade vi i bitbucket."}
                                />
                            </>
                        }
                    />
                    <div className='bottomTitles'>Utbildning</div>
                    <Experiences
                        title={"Applikationsutvecklare, IT-Högskolan YR, Stockholm"}
                        date={"Augusti 2020 - Juni 2022"}
                        content={
                            <>
                                <DotField
                                    text={"Utveckla mobilapplikationer med React Native i JavaScript och TypeScript för både iOS och Android." +
                                        " Även utveckla appar med Kotlin för Android och Swift för iOS."}
                                />
                                <DotField
                                    text={"Utveckla webbapplikationer med React.js och HTML + CSS"}
                                />
                                <DotField
                                    text={"Databashantering: FireStore och mySQL"}
                                />
                                <DotField
                                    text={"Skapa eget API med C#"}
                                />
                                <DotField
                                    text={"Git version control"}
                                />
                            </>
                        }
                    />

                    <Experiences
                        title={"Matematik 2C + 3B, Åsö Komvux"}
                        date={"Augusti 2019 - Maj 2020"}
                    />
                    <Experiences
                        title={"Data och Kommunikation, NTI Gymnasiet"}
                        date={"Augusti 2016 - Juni 2019"}
                    />

                    <Experiences
                        title={"Språkkunskaper"}
                        content={
                            <>
                                <DotField
                                    text={"Svenska"}
                                />
                                <DotField
                                    text={"Engelska"}
                                />
                            </>
                        }
                    />
                </div>
            </div>

            <div className='rightContainer'>
                
            </div>
        </div>
    )
}

export default CV