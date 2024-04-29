import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Header from '../components/Header';
import Footer from '../components/Footer';
import './SearchParticipant.css'; 

const SearchParticipant = () => {
    const [nameSearch, setNameSearch] = useState('');
    const [idSearch, setIdSearch] = useState('');
    const [phoneSearch, setPhoneSearch] = useState('');


    const handleView = () => {
        console.log('View button clicked');
        // Implement view functionality
    };

    const handleEdit = () => {
        console.log('Edit button clicked');
        // Implement edit functionality
    };

    const handleDelete = () => {
        console.log('Delete button clicked');
        // Implement delete functionality
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
                            value={nameSearch}
                            onChange={(e) => setNameSearch(e.target.value)}
                            placeholder="Search by Name"
                        />
                        <input
                            type="text"
                            value={idSearch}
                            onChange={(e) => setIdSearch(e.target.value)}
                            placeholder="Search by ID"
                        />
                        <input
                            type="text"
                            value={phoneSearch}
                            onChange={(e) => setPhoneSearch(e.target.value)}
                            placeholder="Search by Phone"
                        />
                        <div className="button-container">
                            <button onClick={handleView}>View</button>
                            <button onClick={handleEdit}>Edit</button>
                            <button onClick={handleDelete}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>            
            <Footer />
        </div>
    );
}

export default SearchParticipant;
