import React, { useEffect, useState } from "react";
import './App.css';
import HomeScreen from "./components/HomeScreen";
// import OwnerDash from "./components/OwnerDash";

import '@fontsource/roboto/400.css';

function App() {
  const [user, setUser] = useState(null);
  
  return (
    <div className="App">
      <main>
          {/* owner dash here is temporary for development */}
          {/* <OwnerDash /> */}
          <HomeScreen />
      </main>
    </div>
  );
}

export default App;
