import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import DoctorProfile from "./components/doctor-profile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
