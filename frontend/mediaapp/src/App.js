import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home.js";

import Registration from "./component/Registration/Registration.js";
import Login from "./component/Login/Login.js";
import Aboutus from "./component/Pages/Aboutus.js";
import Contactus from "./component/Pages/Contactus.js";
import Sports from "./component/News/SportsNews/Sports.js";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* aboutus */}
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/connectus" element={<Contactus />} />
          <Route path="/sports" element={<Sports />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
