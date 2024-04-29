import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Header from '../components/Header';
import Footer from '../components/Footer';
import './SearchCoach.css'; 

const SearchCoach = () => {
    const [coachIdSearch, setCoachIdSearch] = useState('');
    const [empIdSearch, setEmpIdSearch] = useState('');
    const [coachNameSearch, setCoachNameSearch] = useState('');
    const [phoneSearch, setPhoneSearch] = useState('');
    const [showDetails, setShowDetails] = useState(false);

    const handleSearch = () => {
        // Perform search based on the criteria
        console.log('Search button clicked');
        // You can implement the search functionality here
    };

    return (
        <div>
            <Header />
            <Navbar />
            <div className="page-container">
                <div className="content-container">
                    <div className="search-container">
                        <input
                            type="text"
                            value={coachIdSearch}
                            onChange={(e) => setCoachIdSearch(e.target.value)}
                            placeholder="Search by Coach ID"
                        />
                        <input
                            type="text"
                            value={empIdSearch}
                            onChange={(e) => setEmpIdSearch(e.target.value)}
                            placeholder="Search by Emp ID"
                        />
                        <input
                            type="text"
                            value={coachNameSearch}
                            onChange={(e) => setCoachNameSearch(e.target.value)}
                            placeholder="Search by Coach Name"
                        />
                        <input
                            type="text"
                            value={phoneSearch}
                            onChange={(e) => setPhoneSearch(e.target.value)}
                            placeholder="Search by Phone"
                        />
                        <div className="button-container">
                            <button onClick={() => setShowDetails(!showDetails)}>View</button>
                            <button onClick={handleSearch}>Edit</button>
                            <button onClick={handleSearch}>Delete</button>
                        </div>
                    </div>
                    {showDetails && (
                        <div className="details-container">
                            <h2>Coach Details</h2>
                            <p>Coach ID: [Dummy Data]</p>
                            <p>Coach Name: [Dummy Data]</p>
                            <p>Coach Contact: [Dummy Data]</p>
                            <p>Coach Email: [Dummy Data]</p>
                            <p>Manager Name: [Dummy Data]</p>
                            <p>Availability: [Dummy Data]</p>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SearchCoach;
