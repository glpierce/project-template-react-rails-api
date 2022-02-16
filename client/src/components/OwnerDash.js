import React, { useState } from "react";
import OwnerDashList from './OwnerDashList';
import OwnerDashTable from './OwnerDashTable';
import OwnerDashBookings from "./OwnerDashBookings";

function OwnerDash({ user, setUser }) {
    const [tableToggle, setTableToggle] = useState(true)
    const [bookingsToggle, setBookingsToggle] = useState(false)


    function handleListClick(e, target) {
        if (target == 'properties') {
            setTableToggle(true)
            setBookingsToggle(false)
        } else if (target == 'bookings') {
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
                <OwnerDashTable user={user} setUser={setUser} /> : 
                <OwnerDashBookings user={user} setUser={setUser} /> }
            </div>
        </div>
    )
}

export default OwnerDash;