import React, { useEffect, useState } from "react";
import './App.css';
import NavigationBar from "./components/NavigationBar";
import HomeScreen from "./components/HomeScreen";
import OwnerDash from "./components/OwnerDash";
import ProviderDash from "./components/ProviderDash"
import { Switch, Route } from "react-router-dom";

import '@fontsource/roboto/400.css';

function App() {
  const [user, setUser] = useState({})
  
  function onLogin(user) {
    setUser(user)
  }

  return (
    <div className="App">
      <NavigationBar user={user} setUser={setUser} />
      <Switch>

        <Route path={"/provider"}>
          <ProviderDash user={user} setUser={setUser} />
        </Route>

        <Route path={"/owner"}>
          <OwnerDash user={user} setUser={setUser} />
        </Route>
      
        <Route path={"/"}>
          <HomeScreen user={user} setUser={setUser} />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
