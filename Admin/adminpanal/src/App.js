import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./Component/Registration/Registration.js";
import Login from "./Component/Login/Login.js";
import Home from "./Component/Home/Home.js";
import AddNews from "./Component/News/AddNews/AddNews.js";
import Logout from "./Component/Logout/Logout.js";
import Addsportsnews from "./Component/News/SportsNews/Addsportsnews.js";
import Shownews from "./Component/News/AddNews/Shownews.js";
import Sports from "./Component/News/SportsNews/Sports.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newsform" element={<AddNews />} />
            <Route path="sportsNewsform" element={<Addsportsnews />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/news" element={<Shownews />} />
            <Route path="/sportsnews" element={<Sports />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
