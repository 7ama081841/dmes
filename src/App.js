import "./App.css";
import Home from "./components/Home";
import SinUpSinIn from "./components/sin-up_sin-in";
import Regester from "./components/regester";
import PatientSigUup from "./components/Patient-sign-up";
import MédecinSignUp from "./components/Médecin-sign-up";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Regester />} />
                    <Route exact path="/SinUpSinIn" element={<SinUpSinIn />} />
                    <Route path="/patient" element={<PatientSigUup />} />
                    <Route path="/medecin" element={<MédecinSignUp />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

// <Route path="/Home" element={<Home />} />
// <PatientSigUup />
// <MédecinSignUp/>
// <SinUpSinIn />
// <Home />

export default App;
