import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import DashBoard from "./views/DashBoard";
import Login from "./views/Login";
import Footer from "./components/Footer";
import LeftComponents from "./components/LeftComponents";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex">
        <LeftComponents />
        <div className="contents-container container-fluid bg-light col p-0">
          <Routes>
            <Route path="" element={<DashBoard />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
