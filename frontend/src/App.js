// General Imports
import { Route, Routes} from "react-router-dom";
import "./App.css";
import React from "react";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchPage from "./pages/SearchPage/SearchPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import VideoPage from "./pages/VideoPage/VideoPage";


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/search/:searchQuery" element={<SearchPage />} />
          <Route path="/video/:videoId" element={<VideoPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
