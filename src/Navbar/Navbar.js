import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {

    return (
        <div className='navbarContainer'>
            <div className='navbar'>
                <div className='navbarLeftContainer'>
                    My Page
                </div>
                <div className='navbarRightContainer'>
                    <Link to="/" style={{ textDecoration: "none", color: "black" }} className="link navbarLinks" >Home</Link>
                    {/* <div>About</div> */}
                    <Link to="/education" style={{ textDecoration: "none", color: "black" }} className="link navbarLinks">Education</Link>
                    <Link to="/work" style={{ textDecoration: "none", color: "black" }} className="link navbarLinks">Work</Link>
                    <div>Contact</div>
                </div>
            </div>
        </div >
    )
}

export default Navbar