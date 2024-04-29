import React, { useState, useEffect } from 'react';

import './Reminders.css';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Reminders = () => {

    const [batchNames, setBatchNames] = useState([]);
    const [input, setInput] = useState('');
    const [selectedBatch, setSelectedBatch] = useState('');
    const [batchDetails, setBatchDetails] = useState([]);

    useEffect(() => {
        fetchBatchNames();
      }, []);

      const fetchBatchNames = async () => {
        try {
          const response = await fetch(`http://chknmate.com:8080/report/utility/batch/search?batch_name=${input}`)
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setBatchNames(data.map(item => item.batch_name));
        } catch (error) {
          console.error("Failed to fetch batch names:", error);
        }
      };

      const fetchBatchDetails = async (name) => {
        // Fetch more details based on the selected batch name
        try {
          const response = await fetch(`http://chknmate.com:8080/report/utility/batch/search?batch_name=${name}`);
          console.log(response);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          if (response.status === 204) {
            console.log("No content returned for this batch name.");
            setBatchDetails([]); // Optionally clear the details or handle differently
            return;
          }
          const details = await response.json(); // This will only execute if content is available
            setBatchDetails(details);
        } catch (error) {
            console.error("Failed to fetch batch details:", error);
        }
      };

       // Filter batch names based on the input, showing results only if input length is >= 3
    const filteredNames = input.length >= 3 ? batchNames.filter(name =>
        name.toLowerCase().includes(input.toLowerCase())
    ) : [];

      const handleInputChange = (event) => {
        setInput(event.target.value);
        setSelectedBatch(event.target.value);
        fetchBatchDetails(event.target.value);
      };

    //   const  handleNameClick = (event) => {
    //     setSelectedBatch(event.target.value);
    //     fetchBatchDetails(event.target.value);
    //   }

      const sendReminder = (batchName) => {
        console.log(`Sending reminder for ${batchName}`);
        // Implement the send reminder functionality here
      };

     
  

    return(
        <div>
            <Header />
            <Navbar />
            <div className='page-container'>
                    <h2>Reminders</h2>
                    <div className='batchNameCls'>
                        <div className='SelectBatchName'>
                            <label htmlFor="batchName">Batch Name :</label>
                            <input
                                list="batch-name-list"
                                value={input}
                                onChange={handleInputChange}
                                placeholder="Search Batch Name"
                            />
                            <datalist className='dropdownList' id="batch-name-list">
                                {filteredNames.map(name => (
                                <option key={name} value={name} />
                                ))}
                            </datalist>
                        </div>
                        <div className='detailTable'>
                            {batchDetails.length > 0 && input.length >= 3 && (
                                <table>
                                    <thead>
                                        <tr>
                                        <th>Batch Name</th>
                                        <th>Venue Address </th>
                                        <th>City</th>
                                        <th>Batch Timing</th>
                                        <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {batchDetails.map((detail, index) => (
                                        <tr key={index}>
                                            <td>{detail.batch_name}</td>
                                            <td>{detail.venue_address_1}</td>
                                            <td>{detail.city}</td>
                                            <td>{detail.batch_timing}</td>
                                            <td>
                                            <button onClick={() => sendReminder(detail.batch_name)}>Send Reminder</button>
                                            </td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                        
                    </div> 
                
            </div>
            <Footer />
        </div>
        
    );
}

export default Reminders;