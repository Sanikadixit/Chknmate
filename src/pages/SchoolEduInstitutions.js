import './SchoolEduInstitutions.css';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { TextField } from '@mui/material';
import { useState } from 'react';

const SchoolEduInstitutions = () => {

    const city = ['Select a City','Bangalore'];
    const district = ['Select a District','Bangalore'];
    const state = ['Select a State','Karnataka'];
    const country = ['Select a Country','India'];

    const [institutionName, setInstitutionName ] = useState('');
    const [institutionType, setInstitutionType ] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [addressLine3, setAddressLine3] = useState('');
    const [landmark, setLandmark] = useState('');
    const [pinCode, setPinCode] = useState('');
    const [selectedCity, setSelectedCity] = useState(city[1]); 
    const [selectedDist, setSelectedDist] = useState(district[1]); 
    const [selectedState, setSelectedState] = useState(state[1]); 
    const [selectedCountry, setSelectedCountry] = useState(country[1]); 
    const [grades, setGrades ] = useState('');
    const [totalKids, setTotalKids ] = useState('');
    const [totalClasses, setTotalClasses ] = useState('');
    const [coordinatorName, setCoordinatorName ] = useState('');
    const [coordinatorPhone, setCoordinatorPhone] = useState('');
    const [coordinatorEmail, setCoordinatorEmail] = useState('');
    const [locationDetails, setLocationDetails] = useState('');

    const handleInstiNameChange = (e) => {
        setInstitutionName(e.target.value);
    }
    const handleInstiTypeChange = (e) => {
        setInstitutionType(e.target.value);
    };
    const handleCityChange = (e) => {
        if(e.target.value === "Bangalore"){
            setSelectedCity('BLR'); 
        }     
    };
    const handleDistChange = (e) => {
        if(e.target.value === "Bangalore"){
        setSelectedDist('BLR');
        }
    };
    const handleStateChange = (e) => {
        if(e.target.value === "Karnataka"){
        setSelectedState('KA');
        }
    };
    const handleCountryChange = (e) => {
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
    const handleGradesChange = (e) => {
        setGrades(e.target.value);
    }
    const handleTotalKidsChange = (e) => {
        setTotalKids(e.target.value);
    }
    const handleTotalClassesChange = (e) => {
        setTotalClasses(e.target.value);
    }
    const handleCoordNameChange = (e) => {
        setCoordinatorName(e.target.value);
    }
    const handleCoordPhoneChange = (e) => {
        setCoordinatorPhone(e.target.value);
    }
    const handleCoordEmailChange = (e) => {
        setCoordinatorEmail(e.target.value);
    }
    const handleLocDetailsChange = (e) => {
        setLocationDetails(e.target.value);
    }

    const handleSave = async () => {
        const params = new URLSearchParams({
            location_type:institutionType,
            location_name:institutionName,
            address_1:addressLine1,
            address_2:addressLine2,
            address_3:addressLine3,
            landmark:landmark,
            city: selectedCity,
            district:selectedDist,
            state:selectedState,
            pin:pinCode.toString(),
            country:selectedCountry,
            total_no_floors:totalClasses.toString(),
            total_units:totalKids.toString(),
            total_towers:grades.toString(),
            coorinator_name:coordinatorName,
            coorinator_phone:coordinatorPhone.toString(),
            coorinator_email:coordinatorEmail,
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
                <h3>School Education Institutions Details</h3>
                <div className='content-section'>
                    <div className='row1'>
                        <div className='insti-name'>
                            <label htmlFor="institutionName">Institution Name :</label>
                            <TextField id="institutionName" className="instiName" variant='standard'  placeholder='Search Institution Name' onChange={handleInstiNameChange} />
                        </div>
                        <div className='insti-type'>
                            <label htmlFor="institutionType">Institution Type:</label>
                            <div className='radio-list'>
                                <div className="society">
                                    <input type="radio" id="society" name="type" value="Society" onChange={handleInstiTypeChange} />
                                    <span>Society</span>
                                </div>
                                <div className="edu-insti">
                                    <input type="radio" id="eduInsti" name="type" value="Education Institution" onChange={handleInstiTypeChange} />
                                    <span>Education Institution</span>
                                </div>
                                <div className="other">
                                    <input type="radio" id="other" name="type" value="Other" onChange={handleInstiTypeChange} />
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
                            <div className='pinCode'>
                                <label htmlFor="pinCode">Pin Code :</label><br />
                                <TextField id="pinCode" variant='standard'  placeholder='Add Pin Code' onChange={handleLandmarkChange} /><br />
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

                    <div className='total row4'>
                        <div className='grade'>
                            <label htmlFor="grades">Grades :</label>
                            <TextField type='number' id='grades' variant='standard' onChange={handleGradesChange}/>
                        </div>
                        <div className='kids'>
                            <label htmlFor="totalKids">Total No. of Kids :</label>
                            <TextField type='number' id='totalKids' variant='standard' onChange={handleTotalKidsChange}/><br />
                        </div>
                        <div className='classes'>
                            <label htmlFor="totalClasses">Total No. of Classes :</label>
                            <TextField type='number' id='totalClasses' variant='standard' onChange={handleTotalClassesChange} /><br />
                        </div>
                    </div>

                    <div className='co-ordinatorDetails row5'>
                        <div className='co-ordName'>
                            <label htmlFor="coordName">Co-ordinator Name :</label>
                            <TextField id="coordName" variant='standard'  placeholder='Enter a Name' onChange={handleCoordNameChange} /><br />
                        </div>
                        <div className='co-ordPh'>
                            <label htmlFor="coordPhone">Co-ordinator Phone :</label>
                            <TextField id="coordPhone" variant='standard'  placeholder='Enter a Mobile Number' onChange={handleCoordPhoneChange} /><br />
                        </div>
                        <div className='co-ordMail'>
                            <label htmlFor="coordMail">Co-ordinator Email :</label>
                            <TextField id="coordMail" variant='standard'  placeholder='Enter a Email' onChange={handleCoordEmailChange} /><br />
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

export default SchoolEduInstitutions;