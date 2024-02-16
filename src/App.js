import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Banner from "./Components/Banner/Banner";
import Login from "./Components/Login/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/banner" element={<Banner />} />
        {/* Use the Link component to navigate to the login page */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
