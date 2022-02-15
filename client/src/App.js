import React, { useEffect, useState } from "react";
import './App.css';
import HomeScreen from "./components/HomeScreen";
import OwnerDash from "./components/OwnerDash";

import '@fontsource/roboto/400.css';

function App() {
  const [user, setUser] = useState(null);
  
  return (
    <div className="App">
      <main>
        <HomeScreen />

        {/* OwnerDash placement is temporary for development */}
        <div>
          <OwnerDash />
        </div>
        {/* OwnerDash placement is temporary for development */}

      </main>
    </div>
  );
}

export default App;
