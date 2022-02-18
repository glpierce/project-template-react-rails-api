import React, { useEffect, useState } from "react";
import './App.css';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import NavigationBar from "./components/NavigationBar";
import HomeScreen from "./components/HomeScreen";
import OwnerDash from "./components/OwnerDash";
import ProviderDash from "./components/ProviderDash"
import { Switch, Route } from "react-router-dom";
import ProviderSearch from "./components/ProviderSearch";
import PropertyDash from "./components/PropertyDash";
import DateFnsUtils from '@date-io/date-fns';
import TasksForm from "./components/TasksForm";

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
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className="App">
        <NavigationBar user={user} setUser={setUser} />
        <Switch>

          <Route path={"/provider"}>
            <ProviderDash user={user} setUser={setUser} />
          </Route>

          <Route path={"/owner/property/new/:id"} >
            <TasksForm user={user} setUser={setUser} />
          </Route>

          <Route path={"/owner/property/:id/book/:taskId"}>
            <ProviderSearch />
          </Route>

          <Route path={"/owner/property/:id"}>
            <PropertyDash />
          </Route>

          <Route path={"/owner/findproviders"}>
            <ProviderSearch />
          </Route>

          <Route path={"/owner"}>
            <OwnerDash user={user} setUser={setUser} />
          </Route>
        
        
          <Route path={"/"}>
            <HomeScreen user={user} setUser={setUser} />
          </Route>

        </Switch>
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default App;
