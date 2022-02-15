import React, { useState } from "react";
import OwnerDashList from './OwnerDashList';
import OwnerDashTable from './OwnerDashTable';
import OwnerDashBookings from "./OwnerDashBookings";

function OwnerDash() {
    const [tableToggle, setTableToggle] = useState(true)
    const [bookingsToggle, setBookingsToggle] = useState(false)


    function handleListClick(e, target) {
        console.log(target)
    }

    return (
        <div>
            <div>
                <OwnerDashList handleListClick={handleListClick} />
            </div>
            <div>
               { tableToggle ?  <OwnerDashTable /> : <OwnerDashBookings /> }
            </div>
        </div>
    )
}

export default OwnerDash;