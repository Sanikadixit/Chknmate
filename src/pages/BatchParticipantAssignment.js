import { TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Navbar from "../components/Navbar";
import Header from '../components/Header';
import Footer from '../components/Footer';

const BatchParticipantAssignment = () => {

    const [input, setInput] = useState('');
    const [participantName, setParticipantName] = useState([]);
    const [selectedParticipantName, setSelectedParticipantName] = useState('');
    const [batches, setBatches] = useState([]);
    const [locationDetails, setLocationDetails] = useState([]);

    useEffect(() => {
        fetchParticipantNames();
    }, []);

    const fetchParticipantNames = async () => {
        try{
            const response = await fetch(`http://chknmate.com:8080/report/utility/participant/search?participant_name=${participantName}`);
            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setLocationDetails(data);
            setParticipantName(data.map(item => item.participant_name));
        } catch (error) {
            console.error("Failed to fetch batch names:", error);
        }
    };

    const filteredParticipantNames = input.length >= 3 ? participantName.filter(name => name.toLowerCase().includes(input.toLowerCase())) : [];

    const handleInputChange = (event) => {
        setInput(event.target.value);
        setSelectedParticipantName(event.target.value);
    }

    const handleSearch = () => {
        document.getElementById('details-table').style.display = "block";
    }

    return (
        <div>
            <Header />
            <Navbar />
            <div className='page-container'>
                <h2> </h2>
                <div className='participantNamecls'>
                    <div className='SelectParticipantName'>
                        <div className='searching'>
                            <label htmlFor='participantName'>Participant Name : </label>
                            <input list='participant-name-list' value={input} onChange={handleInputChange} placeholder='Search Participant Name Here' />
                        </div>
                        {input.length >= 3 && (
                            <datalist className='dropdownList' id='participant-name-list'>
                                {locationDetails.map(participant => (
                                    <option key={participant.participant_name} value={participant.participant_name} onClick={() => handleSelectedParticipant(participant)} />
                                ))}
                            </datalist>
                        )}

                        <button className='searchbtn' onClick={handleSearch}>Search</button>
                    </div>

                    <div className='detailsTable' id='details-table'>
                        {locationDetails.map(participant => (
                            <div className='vertical-table'>
                                <div className='table-row'>
                                    <div className='table-cell'>
                                        <p><strong>Participant Name : </strong> {selectedParticipantName} </p>
                                        <p><strong>Location Details : </strong> {participant.participant_name === selectedParticipantName ? (participant.participant_location_name, participant.participant_address_1, participant.participant_address_2, participant.participant_city, participant.participant_state) : null} </p>
                                        <p><strong>Chess Level : </strong> </p>
                                    </div>
                                    <div className='table-cell'>
                                        <Link to='/'><button>Add Batch Participant</button></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )


}


export default BatchParticipantAssignment;