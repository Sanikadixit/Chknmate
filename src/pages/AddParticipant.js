import { TextField } from '@mui/material';
import { useState, useEffect } from 'react';

import Navbar from "../components/Navbar";
import Header from '../components/Header';
import Footer from '../components/Footer';
import './AddParticipant.css'; 

const AddParticipant = () => {
    
    const [input, setInput] = useState('');
    const [batchNames, setBatchNames] = useState([]);
    const [batches, setBatches] = useState([]);
    const [selectedBatches, setSelectedBatch] = useState('');
    const [locatioName, setLocationName] = useState('');
    const [locationDetails, setLocationDetails] = useState([]);

    useEffect(() => {
        fetchBatchNames();
    }, []);

    const fetchBatchNames = async () => {
        // if(input >= 3){
            try {
                const response = await fetch(`http://chknmate.com:8080/report/utility/batch/search?batch_name=${input}`)
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setBatches(data);
                setBatchNames(data.map(item => item.batch_name));
                } catch (error) {
                console.error("Failed to fetch batch names:", error);
                }
        // }
    };

    // const fetchBatchDetails = async (name) => {

    // try {
    //     const response = await fetch(`http://chknmate.com:8080/report/utility/batch/search?batch_name=${name}`);
    //     console.log(response);
    //     if (!response.ok) {
    //         throw new Error(`HTTP error! status: ${response.status}`);
    //     }
    //     if (response.status === 204) {
    //         console.log("No content returned for this batch name.");
    //         setBatches([]); // Optionally clear the details or handle differently
    //         return;
    //     }
    //     const details = await response.json(); // This will only execute if content is available
    //         setBatches(details);
    // } catch (error) {
    //     console.error("Failed to fetch batch details:", error);
    // }
    // }; 

    const fetchLocationdetails = async (location) => {
        try {
            const response = await fetch(`http://chknmate.com:8080/chknmate/api/location/create?location_name=${location}`);
            console.log(location);
            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            if(response.status === 204) {
                console.log("No Content returned for this batch name.");
                setLocationDetails([]);
                return;
            }
            const locDetails = await response.json();
            setLocationDetails(locDetails);
        }catch (error) {
            console.error("Failed to fetch batch details:", error);
        }
    };

    const filteredNames = input.length >= 3 ? batchNames.filter(name => name.toLowerCase().includes(input.toLowerCase()) ) : [];

    // const filteredLocation = 

    const handleInputChange = (event) => {
        setInput(event.target.value);
        setSelectedBatch(event.target.value);
        // fetchBatchDetails(event.target.value);
        // fetchBatchDetails(event.target.value);
    };
  
    const handleSelectedBatch = (batch) => {
        // setSelectedBatch(batch);
        console.log(batch);
    }

    // const handleSearch = () => {
    //     console.log(selectedBatches); 
    //     console.log(batches.map(batchData => batchData.location_name));
    //     // const locName = batches.map(batchData => {
    //     //     if(batchData.batch_name == selectedBatches){
    //     //         setLocationName(batchData.location_name[0]);
    //     //     } })
    //     // console.log(locatioName);
    //     // fetchLocationdetails(locatioName);
    // }

    return (
        <div>
            <Header />
            <Navbar />
            <div className='page-container'>
                <h2> </h2>
                <div className='batchNamCls'>
                    <div className='SelectBatchName'>
                        <label htmlFor='batchName'>Batch Name :</label>
                        <input list="batch-name-list" value={input} onChange={handleInputChange} placeholder='Search Batch Name' />
                        

                        <datalist className='dropdownList' id='batch-name-list'> 
                            {filteredNames.map(name => (
                                <option key={name} value={name}  />
                            ))}
                        </datalist>

                        {/* {input.length >= 3 && (
                            <datalist className='dropdownList' id='batch-name-list'> 
                            {batches.map(batch => (
                                <option key={batch.batch_name} value={batch.batch_name} onClick={() => handleSelectedBatch(batch)} />
                            ))}
                            </datalist>
                        
                        )} */}

                        {/* <button onClick={handleSearch}>Search</button> */}

                        
                    </div>
                    {/* <div className='detailsTable'>
                        {batches.map(batch => (
                            batch.batch_name == selectedBatches ? 
                        ))}
                    </div> */}
                </div>

            </div>
        </div>
    );


      

    
  

  






    
    
    
    
    
    
    
    
    
}

export default AddParticipant;











