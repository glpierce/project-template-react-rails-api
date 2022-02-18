import React, { useState } from "react";
import OwnerDashList from './OwnerDashList';
import OwnerDashTable from './OwnerDashTable';
import OwnerDashBookings from "./OwnerDashBookings";
import NewPropertyForm from "./NewPropertyForm";
import TasksForm from "./TaskForm";

function OwnerDash({ user, setUser }) {
    const [tableToggle, setTableToggle] = useState(true)
    const [bookingsToggle, setBookingsToggle] = useState(false)
    const [formToggle, setFormToggle] = useState(true);


    function handleListClick(e, target) {
        if (target === 'properties') {
            setTableToggle(true)
            setBookingsToggle(false)
        } else if (target === 'bookings') {
            setBookingsToggle(true)
            setTableToggle(false)
        }
    }

    return (
        <div>
            <div id='owner-dash-list'>
                <OwnerDashList handleListClick={handleListClick} />
            </div>
            <div id='owner-dash-table'>
               { tableToggle ?  
                <OwnerDashTable user={user} setUser={setUser} />  : 
                <OwnerDashBookings user={user} setUser={setUser} /> }
            </div>
            <div id='prop-tasks-forms'>
                { formToggle ? <NewPropertyForm user={user} taskFormToggle={formToggle} setTaskFormToggle={setFormToggle} /> : <TasksForm />}
            </div>
        </div>
    )
}

export default OwnerDash;