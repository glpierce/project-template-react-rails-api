import React, { useState } from "react";
import OwnerDashList from './OwnerDashList';
import OwnerDashTable from './OwnerDashTable';
import OwnerDashBookings from "./OwnerDashBookings";

function OwnerDash() {
    const [tableToggle, setTableToggle] = useState(true)
    const [bookingsToggle, setBookingsToggle] = useState(false)


    function handleListClick(e, target) {
        { target == 'properties' ? setTableToggle(true) : setTableToggle(false) }
        { target == 'bookings' ? setBookingsToggle(true) : setBookingsToggle(false) }
    }

    return (
        <div>
            <div id='owner-dash-list'>
                <OwnerDashList handleListClick={handleListClick} />
            </div>
            <div id='owner-dash-table'>
               { tableToggle ?  <OwnerDashTable /> : <OwnerDashBookings /> }
            </div>
        </div>
    )
}

export default OwnerDash;