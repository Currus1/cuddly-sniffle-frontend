import React from 'react'
import '../bootstrap.css'
import '../App.css'
import './style/driverComponentCSS.css'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DriverComponent = () => {
    return (
        <>
            <h3>Enter Driver Data:</h3>
            <div className='driverInputContainer'>
                <div className='userDataOne'>
                    <label>Name:</label>
                    <input type="text" id="fullName"/>
                    <label>Surname:</label>
                    <input type="text" id="surname" />
                    <label>Birthday:</label>
                    <DatePicker
                        id="birthday"
                        showYearDropdown
                        dateFormatCalendar="MMMM"
                        yearDropdownItemNumber={80}
                        scrollableYearDropdown
                    />
                    <label>Email:</label>
                    <input type="text" id="email"/>
                </div>
                <div className='userDataTwo'>
                    <label>Phone Number:</label>
                    <input type="text" id="phoneNumber"/>
                    <label>Vechile type:</label>
                    <input type="text" id="vechileType" />
                    <label>License Number:</label>
                    <input type="text" id="licenseNumber"/>
                </div>
            </div>

            <div className="controls">
                <button className='add_driver'>Add a driver</button>
            </div>

            <div className="tableContainer">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Birthday</th>
                        <th>Email</th>
                        <th>phoneNr</th>
        	            <th>vechileType</th>
                        <th>licenseNr</th>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default DriverComponent