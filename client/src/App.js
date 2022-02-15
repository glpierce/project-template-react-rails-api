import React, { useEffect, useState } from "react";
import './App.css';
import HomeScreen from "./components/HomeScreen";
// import OwnerDash from "./components/OwnerDash";
// import Login from "./components/Login";

import '@fontsource/roboto/400.css';

function App() {
  const [user, setUser] = useState(null);
  
  function onLogin(user) {
    setUser(user)
  }
  
  return (
    <div className="App">
      <main>
        <HomeScreen />

        {/* OwnerDash placement is temporary for development */}
        <div>
          {/* <OwnerDash /> */}
        </div>
        {/* OwnerDash placement is temporary for development */}
        {/* Login placement is temporary for development */}
        <div>
          {/* <Login /> */}
        </div>
        {/* Login placement is temporary for development */}

      </main>
    </div>
  );
}

export default App;
