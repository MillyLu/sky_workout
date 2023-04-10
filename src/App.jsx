import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppRoutes } from "./routes";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  return (
    <React.StrictMode>
      <BrowserRouter>
        <AppRoutes user={user} setUser={setUser} />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
