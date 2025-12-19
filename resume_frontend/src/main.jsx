import { createRoot } from "react-dom/client";
import "./index.css";

// ✅ FIXED IMPORT
import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import GenerateResume from "./pages/GenerateResume";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "./context/UserContext";
import Resume from "./components/Resume";

import ResumePrint from "./pages/ResumePrint";

createRoot(document.getElementById("root")).render(
  <UserProvider>
    <BrowserRouter>
      <Toaster />
      <Routes>
        {/* MAIN LAYOUT */}
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="generate-resume" element={<GenerateResume />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>

        {/* PREVIEW ROUTE */}
        <Route path="/resume/preview" element={<Resume />} />

        {/* 🔥 PRINT-ONLY ROUTE */}
        <Route path="/resume/print" element={<ResumePrint />} />
      </Routes>
    </BrowserRouter>
  </UserProvider>
);
