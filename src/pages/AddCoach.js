import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Header from '../components/Header';
import Footer from '../components/Footer';
import TextField from '@mui/material/TextField';
import './AddCoach.css'; 

const AddCoach = () => {
    const [formData, setFormData] = useState({
        empId: '',
        phone: '',
        address: '',
        alternatePhn: '',
        personalEmail: '',
        managerId: '',
        daysOfWeek: {
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
            sunday: false
        }

    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };
 
    const handleCheckboxChange = (day) => {
        setFormData({
            ...formData,
            daysOfWeek: {
                ...formData.daysOfWeek,
                [day]: !formData.daysOfWeek[day]
            }
        });
    };

    const handleTimingChange = (e) => {
        const { value } = e.target;
        setFormData({ ...formData, timing: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log("Form data:", formData);
       
        setFormData({
            empId: '',
            phone: '',
            address: '',
            alternatePhn: '',
            personalEmail: '',
            managerId: '',
            daysOfWeek: {
                monday: false,
                tuesday: false,
                wednesday: false,
                thursday: false,
                friday: false,
                saturday: false,
                sunday: false
            },
            timing: ''
        });
    };

    return (
        <div >
            <Header />
            <Navbar />
            <div className="page-container">
                <div className="content-container">
                    <form className="form-container" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="empid">Emp ID:</label>
                            <TextField id="empid" type="text" variant="standard" className="MuiInputBase-root" value={formData.empId} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone:</label>
                            <TextField id="phone" type="tel" variant="standard" className="MuiInputBase-root" value={formData.phone} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address:</label>
                            <TextField id="address" variant="standard" className="MuiInputBase-root" value={formData.address} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="alternatephn">Alternate Phone Number:</label>
                            <TextField id="altphn" variant="standard" className="MuiInputBase-root" value={formData.alternatePhn} onChange={handleChange} />
                        </div>      
                        <div className="form-group">
                            <label htmlFor="personalemail">Personal Email:</label>
                            <TextField id="personalemail" variant="standard" className="MuiInputBase-root" value={formData.personalEmail} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="managerid">Manager ID:</label>
                            <TextField id="managerid" type="text" variant="standard" className="MuiInputBase-root" value={formData.managerId} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Days of Week:</label>
                            <div className='form-group checkbox-container'>
                            <div className="checkbox-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={formData.daysOfWeek.monday}
                                        onChange={() => handleCheckboxChange('monday')}
                                    />
                                    Monday
                                </label>
                            </div>
                            <div className="checkbox-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={formData.daysOfWeek.tuesday}
                                        onChange={() => handleCheckboxChange('tuesday')}
                                    />
                                    Tuesday
                                </label>
                            </div>
                            <div className="checkbox-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={formData.daysOfWeek.wednesday}
                                        onChange={() => handleCheckboxChange('wednesday')}
                                    />
                                    Wednesday
                                </label>
                            </div>
                            <div className="checkbox-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={formData.daysOfWeek.thursday}
                                        onChange={() => handleCheckboxChange('thursday')}
                                    />
                                    Thursday
                                </label>
                            </div>
                            <div className="checkbox-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={formData.daysOfWeek.friday}
                                        onChange={() => handleCheckboxChange('friday')}
                                    />
                                    Friday
                                </label>
                            </div>
                            <div className="checkbox-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={formData.daysOfWeek.saturday}
                                        onChange={() => handleCheckboxChange('saturday')}
                                    />
                                    Saturday
                                </label>
                            </div>
                            <div className="checkbox-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={formData.daysOfWeek.sunday}
                                        onChange={() => handleCheckboxChange('sunday')}
                                    />
                                    Sunday
                                </label>
                            </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Available Timing:</label>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        value="8-5"
                                        checked={formData.timing === '8-5'}
                                        onChange={handleTimingChange}
                                    />
                                    8-5
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        value="9-6"
                                        checked={formData.timing === '9-6'}
                                        onChange={handleTimingChange}
                                    />
                                    9-6
                                </label>
                                </div>
                                </div>
                        <div className="button-container">
                            <button type="submit" className="save">Save</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AddCoach;
