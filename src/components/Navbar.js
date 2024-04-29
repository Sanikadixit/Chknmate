import React from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    return (

        <nav className="navbarcls navbar-expand-lg">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav" mr-auto>
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Home</Link> 
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Participant Details
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/add-participant">Add Participant</Link>
                            <Link className="dropdown-item" to="/search-participant">Search Participant</Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Batch Details
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/create-batch">Create Batch</Link>
                            <Link className="dropdown-item" to="/search-batch">Search Batch</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to="/location" className="nav-link">Location</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link to="/society-details" className="nav-link">Society Details</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link to="/institution-details" className="nav-link">Institution Details</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/frenchise-details" className="nav-link">Frenchise Details</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/reports" className="nav-link">Reports</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/feedback" className="nav-link">Feedback</Link>
                    </li>      
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Coach 
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/add-coach">Add Coach</Link>
                            <Link className="dropdown-item" to="/search-coach">Search Coach</Link>
                            <Link className="dropdown-item" to="/assign-coach">Assignment of a Coach</Link>
                            <Link className="dropdown-item" to="/time-table">Time Table</Link>
                            <Link className="dropdown-item" to="/avail-coach">Availability of Coach</Link>
                            <Link className="dropdown-item" to="/reminder">Reminders</Link>
                            <Link className="dropdown-item" to="/participant-attendance">Participants Attendance</Link>
                            <Link className="dropdown-item" to="/coach-attendance">Coach Attendance</Link>
                        </div>
                    </li>
                </ul>
            </div>
       
        </nav>
        
       
    )

}

export default Navbar;



