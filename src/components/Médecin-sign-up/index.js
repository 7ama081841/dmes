import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { doctorProfile } from "../../api";

export default function MédecinSignUp() {
    
    const handleEye = () => {
        const password = document.querySelector(".password");
        const eye = document.querySelector("i");

        if (password.type === "password") {
            password.type = "text";
            eye.classList.remove("fa-eye");
            eye.classList.add("fa-eye-slash");
        } else {
            password.type = "password";
            eye.classList.remove("fa-eye-slash");
            eye.classList.add("fa-eye");
        }
    };

    const [nom, setNom] = useState({});
    const [prenom, setPrenom] = useState({});
    const [adresseCabinet, setAdresseCabinet] = useState({});
    const [telephone, setTelephone] = useState({});
    const [specialite, setSpecialite] = useState({});
    const [nomHopital, setNomHopital] = useState({});
    const [password, setPassword] = useState({});

    const regester = (e) => {
        e.preventDefault();
        doctorProfile.push({
            id: doctorProfile.length + 1,
            nom,
            prenom,
            adresseCabinet,
            telephone,
            specialite,
            nomHopital,
            password,
        });
        console.log(doctorProfile);
        const r = document.querySelector(".r");
        r.click();
        console.log(doctorProfile);
    };

    return (
        <div className="Médecin-sign-up">
            <form>
                <div className="parent">
                    <h2>Sign up Médecin</h2>

                    <input
                        type="text"
                        placeholder="nom"
                        onChange={(e) => {
                            setNom(e.target.value);
                        }}
                    />

                    <input
                        type="text"
                        placeholder="prénom"
                        onChange={(e) => {
                            setPrenom(e.target.value);
                        }}
                    />

                    <input
                        type="text"
                        placeholder="adresse cabinet"
                        onChange={(e) => {
                            setAdresseCabinet(e.target.value);
                        }}
                    />

                    <input
                        type="text"
                        placeholder="téléphone"
                        onChange={(e) => {
                            setTelephone(e.target.value);
                        }}
                    />

                    <input
                        type="text"
                        placeholder="spécialité"
                        onChange={(e) => {
                            setSpecialite(e.target.value);
                        }}
                    />

                    <input
                        type="text"
                        placeholder="nom hôpital"
                        onChange={(e) => {
                            setNomHopital(e.target.value);
                        }}
                    />

                    <input
                        type="password"
                        placeholder="password"
                        className="password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />

                    <div className="show-password" onClick={handleEye}>
                        <i className="fa fa-eye" aria-hidden="true"></i>
                    </div>

                    <Link className="r" to="/DoctorProfile"></Link>
                    <button className="button" onClick={regester}>
                        Regester
                    </button>

                    <div>
                        <Link to="/Regester">you have an account ? Log in</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}
