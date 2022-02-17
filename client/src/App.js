import React, { useEffect, useState } from "react";
import './App.css';
import NavigationBar from "./components/NavigationBar";
import HomeScreen from "./components/HomeScreen";
import OwnerDash from "./components/OwnerDash";
import ProviderDash from "./components/ProviderDash"
import { Switch, Route } from "react-router-dom";
import ProviderSearch from "./components/ProviderSearch";

import '@fontsource/roboto/400.css';
import NewPropertyForm from "./components/NewPropertyForm";

function App() {
  const [user, setUser] = useState({})

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div className="App">
      <NavigationBar user={user} setUser={setUser} />
      <Switch>
        <Route path={"/owner/findproviders"}>
          <ProviderSearch />
        </Route>

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
