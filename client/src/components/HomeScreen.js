import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import TabPanel from './SignupTabs'
import Login from './Login';
import SignupTabs from './SignupTabs';


function HomeScreen({ user, setUser}) {

  useEffect(() => {
    setUser({})
  },[])

  return (
    <>
      <div>
        <SignupTabs user={user} setUser={setUser} />
      </div>
      <div>---- OR ----</div>
      <div id="login">
        <Login user={user} setUser={setUser} />
      </div>
    </>
  )
}

export default HomeScreen;