import './Location.css';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { TextField } from '@mui/material';
import { useState } from 'react';


const Location = () =>{

    const city = ['Select a City','Bangalore'];
    const district = ['Select a District','Bangalore'];
    const state = ['Select a State','Karnataka'];
    const country = ['Select a Country','India'];
    

    const [locationName, setLocationName] = useState('');
    const [locationType, setLocationType] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [addressLine3, setAddressLine3] = useState('');
    const [selectedCity, setSelectedCity] = useState(city[1]); 
    const [selectedDist, setSelectedDist] = useState(district[1]); 
    const [selectedState, setSelectedState] = useState(state[1]); 
    const [selectedCountry, setSelectedCountry] = useState(country[1]); 
    const [landmark, setLandmark] = useState('');
    const [pinCode, setPinCode] = useState('');
    const [totalFloor, setTotalFloor] = useState('');
    const [totalUnits, setTotalUnits] = useState('');
    const [totalTower, setTotalTower] = useState('');
    const [mgrName, setMgrName] = useState('');
    const [mgrPhone, setMgrPhone] = useState('');
    const [mgrMail, setMgrMail] = useState('');
    const [locationDetails, setLocationDetails] = useState('');


    const handleLocNameChange = (e) => {
        setLocationName(e.target.value);
    }
    const handleTypeChange = (e) => {
        setLocationType(e.target.value);
        // setMode(selectedMode);
        // if (selectedMode === 'Offline') {
        //     setLocationVisible(true);
        //     setZoomLinkVisible(false);
        // } else if (selectedMode === 'Online') {
        //     setLocationVisible(false);
        //     setZoomLinkVisible(true);
        // }
    };
    const handleCityChange = (e) => {
        // setSelectedCity(e.target.value);
        if(e.target.value === "Bangalore"){
            setSelectedCity('BLR');
        }    
    };
    const handleDistChange = (e) => {
        // setSelectedDist(e.target.value);
        if(e.target.value === "Bangalore"){
            setSelectedDist('BLR')
        }
    };
    const handleStateChange = (e) => {
        // setSelectedState(e.target.value);
        if(e.target.value === "Karnataka"){
            setSelectedState('KA');
        }
        
    };
    const handleCountryChange = (e) => {
        // setSelectedCountry(e.target.value);
        if(e.target.value === "India"){
            setSelectedCountry('IN');
        }
    };
    const handlePinCodeChange = (e) => {
        setPinCode(e.target.value);
    };
    const handleaddress1Change = (e) => {
        setAddressLine1(e.target.value);
    }
    const handleAddress2Change = (e) => {
        setAddressLine2(e.target.value);
    }
    const handleAddress3Change = (e) => {
        setAddressLine3(e.target.value);
    }
    const handleLandmarkChange = (e) => {
        setLandmark(e.target.value);
    }
    const handleFloorChange = (e) => {
        setTotalFloor(e.target.value);
    }
    const handleUnitsChange = (e) => {
        setTotalUnits(e.target.value);
    }
    const handleTowerChange = (e) => {
        setTotalTower(e.target.value)
    }
    const handleMgrNameChange = (e) => {
        setMgrName(e.target.value)
    }
    const handleMgrPhChange = (e) => {
        setMgrPhone(e.target.value)
    }
    const handleMgrEmailChange = (e) => {
        setMgrMail(e.target.value);
    }
    const handleLocDetailsChange = (e) => {
        setLocationDetails(e.target.value);
    }
    
    
    const handleSave = async () => {
        const params = new URLSearchParams({
            location_type:locationType,
            location_name:locationName,
            address_1:addressLine1,
            address_2:addressLine2,
            address_3:addressLine3,
            landmark:landmark,
            city: selectedCity,
            district:selectedDist,
            state:selectedState,
            pin:pinCode.toString(),
            country:selectedCountry,
            total_no_floors:totalFloor.toString(),
            total_units:totalUnits.toString(),
            total_towers:totalTower.toString(),
            coorinator_name:mgrName,
            coorinator_phone:mgrPhone.toString(),
            coorinator_email:mgrMail,
            location_details:locationDetails
        }).toString();

        const url = `http://chknmate.com:8080/chknmate/api/location/create?${params}`;

        console.log(url);
        try{
            const response = await fetch(url, {
                method: 'GET',
            });
            // Handle the response
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const result = await response.json();
                console.log('Success:', result);
            } catch (error) {
                console.error('Error:', error);
            }
    }


   
    return(
        <div>
            <Header />
            <Navbar />
            <div className='page-container'>
                <h3>Location</h3>
                <div className='content-section'>
                    <div className='row1'>
                        <div className='loc-name'>
                            <label htmlFor="locationName">Location Name :</label>
                            <TextField id="locationName" className="locName" variant='standard'  placeholder='Search Location Here' onChange={handleLocNameChange} />
                        </div>
                        <div className='loc-type'>
                            <label htmlFor="locationType">Location Type:</label>
                            <div className='radio-list'>
                                <div className="society">
                                    <input type="radio" id="society" name="type" value="Society" onChange={handleTypeChange} />
                                    <span>Society</span>
                                </div>
                                <div className="edu-insti">
                                    <input type="radio" id="eduInsti" name="type" value="Education Institution" onChange={handleTypeChange} />
                                    <span>Education Institution</span>
                                </div>
                                <div className="other">
                                    <input type="radio" id="other" name="type" value="Other" onChange={handleTypeChange} />
                                    <span>Other</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='address'>
                        <div className='addr-row2'>
                            <div className='addr1'>
                                <label htmlFor="addressLine1">Address Line 1 :</label><br />
                                <TextField id="addressLine1" variant='standard'  placeholder='Add Address' onChange={handleaddress1Change} /><br />
                            </div>
                            <div className='addr2'>
                                <label htmlFor="addressLine2">Address Line 2 :</label><br />
                                <TextField id="addressLine2" variant='standard'  placeholder='Add Address' onChange={handleAddress2Change} /><br />
                            </div>
                            <div className='addr3'>
                                <label htmlFor="addressLine3">Address Line 3 :</label><br />
                                <TextField id="addressLine3" variant='standard'  placeholder='Add Address' onChange={handleAddress3Change} /><br />
                            </div>
                        </div>
                        <div className='addr-row2 row2'>
                            <div className='addrLandmark'>
                                <label htmlFor="landmark">Landmark :</label><br />
                                <TextField id="landmark" variant='standard'  placeholder='Add Landmark' onChange={handleLandmarkChange} /><br />
                            </div>
                            <div className='addrPincode'>
                                <label htmlFor="pincode">Pin Code :</label><br />
                                <TextField id="pincode" variant='standard'  placeholder='Add Pin Code' onChange={handlePinCodeChange} /><br />
                            </div>
                            <div className='city'>
                                <label htmlFor='cityDropdown'>City : </label><br />
                                <select id='cityDropdown'  placeholder="Select City" onChange={handleCityChange}>
                                    {city.map(cityOpt => (
                                        <option key={cityOpt} value={cityOpt}>
                                            {cityOpt}
                                        </option>
                                    ))}
                                </select>
                            </div>

                        </div>
                        
                        <div className='addr-row3'>  
                            <div className='District'>
                                <label htmlFor='distDropdown'>District : </label><br />
                                <select id='distDropdown'  placeholder="Select District" onChange={handleDistChange}>
                                    {district.map(distOpt => (
                                        <option key={distOpt} value={distOpt}>
                                            {distOpt}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='State'>
                                <label htmlFor='stateDropdown'>State : </label><br />
                                <select id='stateDropdown'  placeholder="Select State" onChange={handleStateChange}>
                                    {state.map(stateOpt => (
                                        <option key={stateOpt} value={stateOpt}>
                                            {stateOpt}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='Country'>
                                <label htmlFor='countryDropdown'>Country : </label><br />
                                <select id='countryDropdown'  placeholder="Select Country" onChange={handleCountryChange}>
                                    {country.map(ctrOpt => (
                                        <option key={ctrOpt} value={ctrOpt}>
                                            {ctrOpt}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='totals row4'>
                        <div className='floor'>
                            <label htmlFor="totalFloor">Total Floors :</label>
                            <TextField type='number' id='totalFloor' variant='standard' onChange={handleFloorChange}/><br />
                        </div>
                        <div className='units'>
                            <label htmlFor="totalUnits">Total Units :</label>
                            <TextField type='number' id='totalUnits' variant='standard' onChange={handleUnitsChange} /><br />
                        </div>
                        <div className='tower'>
                            <label htmlFor="totalTower">Total Towers :</label>
                            <TextField type='number' id='totalTower' variant='standard' onChange={handleTowerChange} /><br />
                        </div>
                    </div>

                    <div className='facilitymgrDetails row5'>
                        <div className='facName'>
                            <label htmlFor="mgrName">Facility Manager Name :</label>
                            <TextField id="mgrName" variant='standard'  placeholder='Enter a Name' onChange={handleMgrNameChange} /><br />
                        </div>
                        <div className='facPh'>
                            <label htmlFor="mgrPhone">Facility Manager Phone :</label>
                            <TextField id="mgrPhone" variant='standard'  placeholder='Enter a Mobile Number' onChange={handleMgrPhChange} /><br />
                        </div>
                        <div className='facMail'>
                            <label htmlFor="mgrMail">Facility Manager Email :</label>
                            <TextField id="mgrMail" variant='standard'  placeholder='Enter a Email' onChange={handleMgrEmailChange} /><br />
                        </div>
                    </div>

                    <div className='location_details'>
                        <label htmlFor="locationDetais">Location Details :</label><br />
                        <TextField id="locationDetails" variant='standard' maxLength={100} className='locDetails'  placeholder='Enter Details Here' onChange={handleLocDetailsChange} />
                    </div>

                    <button onClick={handleSave} className="submit-button">Save</button>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Location;