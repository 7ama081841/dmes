import "./App.css";
import Home from "./components/Home";
import SinUpSinIn from "./components/sin-up_sin-in";
import Regester from "./components/regester";
import PatientSigUup from "./components/Patient-sign-up";
import MédecinSignUp from "./components/Médecin-sign-up";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PatientProfile from "./components/patient-profile";
import DoctorProfile from "./components/doctor-profile";
import ProfileDoctor from "./components/profile-doctor/ProfileDoctor";
import ProfilePatient from "./components/profile-patient/ProfilePatient";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/Regester" element={<Regester />} />
                    <Route path="/SinUpSinIn" element={<SinUpSinIn />} />
                    <Route path="/patient" element={<PatientSigUup />} />
                    <Route path="/medecin" element={<MédecinSignUp />} />
                    <Route
                        path="/ProfilePatient"
                        element={<ProfilePatient />}
                    />
                    <Route
                        path="/PatientProfile"
                        element={<PatientProfile />}
                    />
                    <Route path="/DoctorProfile" element={<DoctorProfile />} />
                    <Route path="/ProfileDoctor" element={<ProfileDoctor />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}


export default App;
