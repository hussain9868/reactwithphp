import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/common/Navbar";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Services from "./component/pages/Services";
import Portfolio from "./component/pages/Portfolio";
import ContactUs from "./component/pages/ContactUs";
import Footer from "./component/Footer";
import { SignIn, SignUp } from "./component/common/SignInSignUp"; // Import SignIn & SignUp components
import Dashboard from "./profile/Dashboard";

export default function App() {
  return (
    <Router>
      {/* Full height layout */}
      <div className="d-flex flex-column min-vh-100">
        
        {/* Navbar at the top */}
        <Navbar />
        
        {/* Main content area (expands to push footer down) */}
        <div className="flex-grow-1 container py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/signin" element={<SignIn />} />  {/* Sign In Route */}
            <Route path="/signup" element={<SignUp />} />  {/* Sign Up Route */}
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>

        {/* Footer always at the bottom */}
        <Footer />
        
      </div>
    </Router>
  );
}
