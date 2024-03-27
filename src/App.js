import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import { AuthContext } from "./contexts/AuthContext";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import Dashboard from "./Components/Dashboard/Dashboard";
import Banner from "./Components/Banner/Banner";
import ProfileForm from "./Components/ProfileForm/ProfileForm";
import NotFound from "./Components/NotFound";
import "../src/App.css";

function App() {
  const { loading, user } = useContext(AuthContext);

  return (
    <Router>
      {!loading && (
        <Routes>
          {/* public and restricted routes */}
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>

          {/* public and not restricted routes */}
          <Route element={<PublicRoute />}>
            <Route path="/" element={<Banner />} />
          </Route>

          {/* protected routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<ProfileForm />} />
          </Route>

          {/* Not Found routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
