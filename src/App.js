import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import AI_Ml_course from "./pages/courses/AL_Ml_course";
import DataScience_course from "./pages/courses/DataScience_course";
import Financial_course from "./pages/courses/Financial_course";
import DigitalMarketing_course from "./pages/courses/DigitalMarketing_course";
function App() {
  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="SignUp" element={<SignUp />} />
          <Route path="profile" element={<Profile />} />
          <Route index element={<Home />} />
          <Route path="ai_ml_course" element={<AI_Ml_course />} />
          <Route path="data_science_course" element={<DataScience_course />} />
          <Route path="financial_course" element={<Financial_course />} />
          <Route
            path="digital_marketing_course"
            element={<DigitalMarketing_course />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
