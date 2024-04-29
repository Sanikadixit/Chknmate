import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import './CreateBatch.css';

function CreateBatch() {
    const [mode, setMode] = useState('');
    const [locationVisible, setLocationVisible] = useState(false);
    const [zoomVisible, setZoomLinkVisible] = useState('');
    const [popupVisible, setPopupVisible] = useState(false);
    const [citySuggestions, setCitySuggestions] = useState([]);
    const [city, setCity] = useState('');
    const [area, setArea] = useState('');
    const [location, setLocation] = useState('');
    const [coachName, setCoachName] = useState('');
    const [studentPopupVisible, setStudentPopupVisible] = useState(false);
    const [students, setStudents] = useState([]);
    const [numStudents, setNumStudents] = useState(0);
    const [batchName, setBatchName] = useState('');
    const [batchType, setBatchType] = useState('');
    const [batchStartDate, setBatchStartDate] = useState('');
    const [selectedBatchDays, setSelectedBatchDays] = useState([]);
    const [batchTiming, setBatchTiming] = useState('');
    const [contactPersonId, setContactPersonId] = useState('');

    const handleContactPersonIdChange = (event) => {
        setContactPersonId(event.target.value);
    };

    const handleBatchTimingChange = (event) => {
        setBatchTiming(event.target.value);
    };

    const handleModeChange = (event) => {
        const selectedMode = event.target.value;
        setMode(selectedMode);
        if (selectedMode === 'Offline') {
            setLocationVisible(true);
            setZoomLinkVisible(false);
        } else if (selectedMode === 'Online') {
            setLocationVisible(false);
            setZoomLinkVisible(true);
        }
    };

    const handleSearchIconClick = () => {
        setPopupVisible(true);
    };

    const handleReturnButtonClick = () => {
        setPopupVisible(false);
        const combinedLocation = `${city}, ${area}, ${location}`;
        setLocation(combinedLocation);
    };

    const handleSubmit = () => {
        const apiUrl = `http://chknmate.com:8080/chknmate/api/batch/new/`;
        const requestBody = {
            batch_days_of_week: selectedBatchDays.join(),
            batch_name: batchName,
            batch_start_date: batchStartDate,
            batch_timings: batchTiming,
            batch_type: batchType,
            coach_id: coachName,
            contact_person_id: contactPersonId,
            location_id: location,
            participant_id: "P0000125" // Assuming this remains constant
        };
    
        // Constructing the batch_id based on the provided parameters
        const batchId = `Chknmate/${mode}/${batchType}/${contactPersonId}/${batchStartDate}/${selectedBatchDays.join()}/${batchTiming}/${coachName}/${batchName}/${location}/${contactPersonId}`;
    
        fetch(apiUrl + batchId, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to create batch');
            }
            return response.json();
        })
        .then(data => {
            console.log('Batch created successfully:', data);
        })
        .catch(error => {
            console.error('Error creating batch:', error);
        });
    };
    
    

    const handleCityChange = (event, value) => {
        setCity(value);
    };

    const handleAreaChange = (event) => {
        setArea(event.target.value);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleCoachNameChange = (event) => {
        setCoachName(event.target.value);
    };

    const handleBatchTypeChange = (event) => {
        setBatchType(event.target.value);
    };

    const handleBatchStartDateChange = (event) => {
        setBatchStartDate(event.target.value);
    };

    const fetchCitySuggestions = async (inputValue) => {
        const dummyData = [
            "New York", "Los Angeles", "Chicago", "Houston", "Phoenix",
            "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"
        ];

        await new Promise((resolve) => setTimeout(resolve, 1000));

        const filteredSuggestions = dummyData.filter(city => city.toLowerCase().startsWith(inputValue.toLowerCase()));

        setCitySuggestions(filteredSuggestions);
    };

    const handleStudentPopupButtonClick = () => {
        setStudentPopupVisible(true);
    };

    const handleStudentPopupReturnButtonClick = () => {
        setStudentPopupVisible(false);
    };

    const handleNumStudentsChange = (event) => {
        const num = parseInt(event.target.value);
        setNumStudents(num);
        const updatedStudents = Array.from({ length: num }, (_, index) => ({
            id: index + 1,
            name: `Student ${index + 1}`,
            selected: false,
        }));
        setStudents(updatedStudents);
    };

    const handleStudentCheckboxChange = (studentId) => {
        setStudents(students.map(student => {
            if (student.id === studentId) {
                return { ...student, selected: !student.selected }; // Toggle the selected state
            }
            return student;
        }));
    };

    const handleBatchDayToggle = (day) => {
        if (selectedBatchDays.includes(day)) {
            setSelectedBatchDays(selectedBatchDays.filter((d) => d !== day));
        } else if (selectedBatchDays.length < 2) {
            setSelectedBatchDays([...selectedBatchDays, day]);
        }
    };

    return (
        <div>
            <Header />
            <Navbar />
            <div className="page-container">
                <div className="content-container">

                    <div className="input-row">
                        <label htmlFor="batchName">Batch Name:</label>
                        <TextField id="batchName" variant="standard" value={batchName} onChange={(event) => setBatchName(event.target.value)} />
                    </div>

                    <div className="input-row radio-row">
                        <label htmlFor="classmode">Batch Mode:</label>
                        <label>
                            <input type="radio" id="offline" name="mode" value="Offline" onChange={handleModeChange} />
                            Offline
                        </label>
                        <label>
                            <input type="radio" id="online" name="mode" value="Online" onChange={handleModeChange} />
                            Online
                        </label>
                        <label>
                            <input type="radio" id="hybrid" name="mode" value="hybrid" onChange={handleModeChange} />
                            Hybrid
                        </label>
                    </div>
                    <div className="input-row radio-row">
                        <label htmlFor="batchType">Batch Type:</label>
                        <label>
                            <input type="radio" id="society" name="batchType" value="Society" onChange={handleBatchTypeChange} />
                            Society
                        </label>
                        <label>
                            <input type="radio" id="school" name="batchType" value="School" onChange={handleBatchTypeChange} />
                            School
                        </label>
                        <label>
                            <input type="radio" id="others" name="batchType" value="Others" onChange={handleBatchTypeChange} />
                            Others
                        </label>
                    </div>
                    

                    <div className="input-row">
                        <label htmlFor="batchStartDate">Batch Start Date:</label>
                        <TextField
                            id="batchStartDate"
                            type="date"
                            variant="standard"
                            value={batchStartDate}
                            onChange={handleBatchStartDateChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>

                    <div className="input-row">
                        <label>Batch Days:</label>
                        <div className="batch-days">
                            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                                <div key={day} className="batch-day">
                                    <input
                                        type="checkbox"
                                        id={day}
                                        checked={selectedBatchDays.includes(day)}
                                        onChange={() => handleBatchDayToggle(day)}
                                    />
                                    <label htmlFor={day}>{day}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="input-row">
                        <label htmlFor="batchTiming">Batch Timing:</label>
                        <Select
                            id="batchTiming"
                            value={batchTiming}
                            onChange={handleBatchTimingChange}
                            variant="standard"
                        >
                            <MenuItem value="12-1 AM">12-1 AM</MenuItem>
                            <MenuItem value="1-2 AM">1-2 AM</MenuItem>
                            <MenuItem value="2-3 AM">2-3 AM</MenuItem>
                            <MenuItem value="3-4 AM">3-4 AM</MenuItem>
                            <MenuItem value="4-5 AM">4-5 AM</MenuItem>
                            <MenuItem value="5-6 AM">5-6 AM</MenuItem>
                            <MenuItem value="6-7 AM">6-7 AM</MenuItem>
                            <MenuItem value="7-8 AM">7-8 AM</MenuItem>
                            <MenuItem value="8-9 AM">8-9 AM</MenuItem>
                            <MenuItem value="9-10 AM">9-10 AM</MenuItem>
                            <MenuItem value="10-11 AM">10-11 AM</MenuItem>
                            <MenuItem value="11-12 PM">11-12 PM</MenuItem>
                            <MenuItem value="12-1 PM">12-1 PM</MenuItem>
                            <MenuItem value="1-2 PM">1-2 PM</MenuItem>
                            <MenuItem value="2-3 PM">2-3 PM</MenuItem>
                            <MenuItem value="3-4 PM">3-4 PM</MenuItem>
                            <MenuItem value="4-5 PM">4-5 PM</MenuItem>
                            <MenuItem value="5-6 PM">5-6 PM</MenuItem>
                            <MenuItem value="6-7 PM">6-7 PM</MenuItem>
                            <MenuItem value="7-8 PM">7-8 PM</MenuItem>
                            <MenuItem value="8-9 PM">8-9 PM</MenuItem>
                            <MenuItem value="9-10 PM">9-10 PM</MenuItem>
                            <MenuItem value="10-11 PM">10-11 PM</MenuItem>
                        </Select>
                    </div>

                    <div className="input-row">
                        <label htmlFor="contactPersonId">Contact Person ID:</label>
                        <TextField
                            id="contactPersonId"
                            variant="standard"
                            value={contactPersonId}
                            onChange={handleContactPersonIdChange}
                        />
                    </div>

                    {locationVisible && (
                        <div className="input-row">
                            <label htmlFor="location">Location:</label>
                            <TextField id="standard-basic" variant="standard"  value={location}   onChange={handleLocationChange} />
                            <span className="search-icon" onClick={handleSearchIconClick}><FontAwesomeIcon icon={faSearch} /></span>
                        </div>
                    )}

                    {zoomVisible && (
                        <div className="input-row">
                            <label htmlFor="zoomlink">Zoom/Google Meet Link:</label>
                            <TextField id="standard-basic" variant="standard" />
                        </div>
                    )}

                    <div className="input-row">
                        <label htmlFor="coachName">Coach Name:</label>
                        <Select
                            id="coachName"
                            value={coachName}
                            onChange={handleCoachNameChange}
                            variant="standard"
                        >
                            <MenuItem value="">Select Coach Name</MenuItem>
                            <MenuItem value="Coach A">Coach A</MenuItem>
                            <MenuItem value="Coach B">Coach B</MenuItem>
                            <MenuItem value="Coach C">Coach C</MenuItem>
                        </Select>
                    </div>

                    <div className="input-row">
                        <label htmlFor="studentnumber">Participants:</label>
                        <TextField id="standard-basic" variant="standard" value={numStudents} onChange={handleNumStudentsChange} />
                    </div>

                    <div className="input-row">
                        <label htmlFor="student">Select Student:</label>
                        <TextField id="standard-basic" variant="standard" />
                        <span className="search-icon" onClick={handleStudentPopupButtonClick}><FontAwesomeIcon icon={faSearch} /></span>
                    </div>

                    <div className="input-row">
                        <label htmlFor="batchName">Batch Details:</label>
                        <TextField
                            id="batchName"
                            variant="standard"
                            value={batchName}
                            onChange={(event) => setBatchName(event.target.value)}
                            maxLength={100}
                        />
                    </div>

                    <button onClick={handleSubmit} className="submit-button">Submit</button>
                </div>

                {popupVisible && (
                    <div className="popup">
                        <div className="popup-inner">
                            <div className="popup-inputs">
                                <div className="input-row">
                                    <label htmlFor="city">City:</label>
                                    <Autocomplete
                                        id="city"
                                        freeSolo
                                        options={citySuggestions}
                                        value={city}
                                        onChange={handleCityChange}
                                        onInputChange={(event, newInputValue) => {
                                            if (newInputValue.length >= 3) {
                                                fetchCitySuggestions(newInputValue);
                                            }
                                        }}
                                        renderInput={(params) => <TextField {...params} variant="standard" className="text-field" />}
                                    />
                                </div>
                                <div className="input-row">
                                    <label htmlFor="area">Area:</label>
                                    <Select
                                        id="area"
                                        value={area}
                                        onChange={handleAreaChange}
                                        variant="standard"
                                        className="text-field"
                                    >
                                        <MenuItem value="">Select Area</MenuItem>
                                        <MenuItem value="Downtown">Downtown</MenuItem>
                                        <MenuItem value="Midtown">Midtown</MenuItem>
                                        <MenuItem value="Uptown">Uptown</MenuItem>
                                    </Select>
                                </div>
                                <div className="input-row">
                                    <label htmlFor="location">Location:</label>
                                    <Select
                                        id="location"
                                        value={location}
                                        onChange={handleLocationChange}
                                        variant="standard"
                                        className="text-field"
                                    >
                                        <MenuItem value="">Select Location</MenuItem>
                                        <MenuItem value="Location1">Location1</MenuItem>
                                    </Select>
                                </div>
                            </div>
                            <button onClick={handleReturnButtonClick}>Return</button>
                        </div>
                    </div>
                )}

                {studentPopupVisible && (
                    <div className="popup">
                        <div className="popup-inner">
                            <div className="popup-inputs">
                                <div className="input-row">
                                    <h3>Find your students:</h3>
                                </div>
                                <div className="input-row">
                                    <label htmlFor="id">ID:</label>
                                    <TextField id="standard-basic" variant="standard" className="id-input" />
                                </div>
                                <div className="input-row">
                                    <label htmlFor="name">Name:</label>
                                    <TextField id="standard-basic" variant="standard" className="name-input" />
                                </div>
                                <div>
                                    <button>Find</button>
                                </div>
                                <div>
                                    {students.map(student => (
                                        <div key={student.id} className="input-row">
                                            <input type="checkbox" checked={student.selected} onChange={() => handleStudentCheckboxChange(student.id)} />
                                            <label htmlFor={`student-${student.id}`}>{student.name}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <button onClick={handleStudentPopupReturnButtonClick}>Close</button>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default CreateBatch;
