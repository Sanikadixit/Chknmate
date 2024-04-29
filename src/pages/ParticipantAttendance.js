import React, { useState, useEffect } from 'react';

import './ParticipantAttendance.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import TextField from '@mui/material/TextField';



const ParticipantAttendance = () => {

    const [inputValue, setInputValue] = useState('');
    const [batchNames, setBatchNames] = useState([]);
    const [selectedBatch, setSelectedBatch] = useState('');
    // const [batchId, setBatchId] = useState([]);
    const [attendanceDetails, setAttendanceDetails] = useState(null);   

    useEffect(() => {
        fetchBatches();
    },[]);

    const fetchBatches = async () => {
        try {
            const response = await fetch('http://chknmate.com:8080/report/utility/batch/search?batch_name=Chkn');

            console.log(response);
            if(!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
            setBatchNames(data.map(item => item.batch_name));
            // setBatchId(data.map(item => item.batch_id));

        }catch (error) {
            console.error("Failed to fetch batch names:", error);
        }
    };

    const fetchBatchDetails = async (batchId) => {
        try {
            const url = `http://chknmate.com:8080/report/utility/batch/attendance?batch_id=${batchId}`;
            const resp = await fetch(url);
            if(!resp.ok){
                throw new Error(`HTTP error! status: ${resp.status}`);
            }

            const details = await resp.json();
            setAttendanceDetails(details);
        }catch (error) {
            console.error("Failed to fetch attendance details:", error);
        }
    };


    const filteredNames = inputValue.length >= 3 ? batchNames.filter(name => name.toLowerCase().includes(inputValue.toLowerCase())
    ) : [];

    const handleChange = (event) => {
        setInputValue(event.target.value);
        setSelectedBatch(event.target.value);
    };
    
    const handleSelectedBatch = (event) => {
        setSelectedBatch(event.target.value);
    };

    const handleFetchAttendance = (event) => {
        fetchBatchDetails(selectedBatch);
    };


    return(
        <div>
            <Header />
            <Navbar />
            <div className='page-container'>
                <h2>Participants Attendance</h2>
                <div className='batchNameCls'>
                    <div className='SelectedBatchName'>
                        <label htmlFor="batchName">Batch Name :</label>
                        <input 
                        list="batch-name-list"
                        value={inputValue}
                        id="batchName" 
                        placeholder='Search Batch Name...' 
                        onChange={handleChange} />

                        <datalist className='dropdownList' 
                        id='batch-name-list'>
                            {
                                filteredNames.map(name => (
                                    <option key={name} value={name} />
                                ))
                            }
                        </datalist>
                        
                        <button className='showBtn' onClick={handleFetchAttendance}>Show Participants</button>
                    </div>
                    {attendanceDetails && (
                        <div>
                        <h2>Attendance Details</h2>
                        <p>{JSON.stringify(attendanceDetails)}</p> {/* Display data; customize as needed */}
                        </div>
                    )}
                </div>

            </div>
            <Footer />
        </div>
    );

}

export default ParticipantAttendance;