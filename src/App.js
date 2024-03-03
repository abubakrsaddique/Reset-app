import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Banner from "./Components/Banner/Banner";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import ProfileForm from "./Components/ProfileForm/ProfileForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profileform" element={<ProfileForm />} />
        <Route path="/banner" element={<Banner />} />
      </Routes>
    </Router>
  );
}

export default App;
