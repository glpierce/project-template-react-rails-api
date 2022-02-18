import React from "react";
import ProviderDashTable from "./ProviderDashTable";

function ProviderDash({ user, setUser }) {
    console.log(user)

    return (
        <div>
            <ProviderDashTable user={user} />
        </div>
    )
}

export default ProviderDash;