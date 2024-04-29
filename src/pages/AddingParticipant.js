import { TextField } from '@mui/material';
import { useState, useEffect } from 'react';


import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './AddingParticipant.css';

const AddingParticipant = () => {

    const levels = ['Select a Admission Level', 'Beginner', 'Intermediate', 'Advance' ];

    const [participantName, setParticipantName] = useState('');
    const [dateofBirth, setDateofBirth] = useState('');
    const [parentsName,setParentsName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [email, setEmail] = useState('');
    const [selectedAdmissionLevel, setSlectedAdmissionLevel] = useState(levels[0]);
    const [locationId, setLocationId] = useState('');
    
    const handleSave = async () => {
        const params = new URLSearchParams({
            participant_name:participantName,
            dob:dateofBirth,
            parent_name:parentsName,
            phone_no:phoneNo,
            participant_level:selectedAdmissionLevel,
            participant_location_id:locationId,
        }).toString();

        const baseUrl = `http://chknmate.com:8080/report/utility/participant/search?participant_name=${participantName}`;

        console.log(baseUrl);
        try{
            const response = await fetch(baseUrl, {
                method: 'GET',
            });
            if(!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const result = await response.json();
            console.log('Success:', result);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const handleParticipantNameChange = (e) => {
        setParticipantName(e.target.value);
    }
    const handleDoBChange = (e) => {
        setDateofBirth(e.target.value);
    }
    const handleParentsNameChange = (e) => {
        setParentsName(e.target.value);
    }
    const handleParticipantPhoneChange = (e) => {
        setPhoneNo(e.target.value);
    }
    const handleParticipantemailChange = (e) => {
        setEmail(e.target.value);
    }
    const handleLevelChange = (e) => {
        setSlectedAdmissionLevel(e.target.value);
    }

    
    return (
        <div>
            <Header />
            <Navbar />
            <div className='page-container'>
                <h2>Add Participant</h2>
                <div className='content-section'>
                    <div className='row1'>
                        <div className='participant-name'>
                            <label htmlFor='participantName'>Participant Name :</label>
                            <TextField id="participantName" className='partiName' variant='standard' placeholder='Enter Participant Name' onChange={handleParticipantNameChange} />
                        </div>
                        <div className='participant-dob'>
                            <label htmlFor='participantDoB'>Date of Birth : </label>
                            <TextField type='date' id='participantDoB' className='dob' variant='stardard' placeholder='Enter Date of Birth' onChange={handleDoBChange} />
                        </div>
                        <div className='parents-name'>
                        <label htmlFor='parentsName'>Parents Name :</label>
                        <TextField id='parentsName' className='parentName' variant='standard' placeholder='Enter Parents Name' onChange={handleParentsNameChange} />
                        </div>
                    </div>
                    <div className='row2'>
                        <div className='phone-no'>
                            <label htmlFor='phoneNo'>Phone No :</label>
                            <TextField id="phoneNo" className='partiphno' variant='standard' placeholder='Enter Phone Number' onChange={handleParticipantPhoneChange} />
                        </div>
                        <div className='mail'>
                            <label htmlFor='email'>Phone No :</label>
                            <TextField id="email" className='mailid' variant='standard' placeholder='Enter Email' onChange={handleParticipantemailChange} />
                        </div>
                        <div className='levels'>
                        <label htmlFor='admlevel'>Admission Level :</label>
                        <select id='levelDropdown' placeholder='Choose Level of Admission' onChange={handleLevelChange}>
                            {levels.map(levelOpt => (
                                <option key={levelOpt} value={levelOpt}>
                                    {levelOpt}
                                </option>
                            ))}
                        </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddingParticipant;