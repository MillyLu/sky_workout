import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppRoutes } from "./routes";


function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;