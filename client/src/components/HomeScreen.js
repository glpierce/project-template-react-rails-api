import React from 'react'
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import TabPanel from './TabPanel'
import Login from './Login';


function HomeScreen() {
  return (
    <>
      <div>
        <TabPanel />
      </div>
      <div>---- OR ----</div>
      <div id="login">
        <Login />
      </div>
    </>
  )
}

export default HomeScreen