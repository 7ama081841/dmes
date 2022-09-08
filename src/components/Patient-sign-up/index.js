import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { patients } from "../../api";

export default function PatientSigUup() {
    const [nom, setNom] = useState({});
    const [prenom, setPrenom] = useState({});
    const [adresse, setAdresse] = useState({});
    const [telephone, setTelephone] = useState({});
    const [groupeSanguin, setGroupeSanguin] = useState({});
    const [password, setPassword] = useState({});

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

    const Regester = (e) => {
        e.preventDefault();

        const input = document.querySelectorAll("input");
        const login = document.querySelector(".Regester");

        patients.push({
            id: patients.length + 1,
            nom,
            prenom,
            adresse,
            telephone,
            groupeSanguin,
            password,
        });

        input.forEach((input) => (input.value = ""));

        console.log(patients);

        login.click()
    };

    return (
        <div className="Patient-sign-up">
            <form>
                <div className="parent">
                    <h2>Sign up Patient</h2>
                    <input
                        type="text"
                        placeholder="nom"
                        onChange={(e) => setNom(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="prénom"
                        onChange={(e) => setPrenom(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="adresse"
                        onChange={(e) => setAdresse(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="téléphone"
                        onChange={(e) => setTelephone(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="groupe sanguin"
                        onChange={(e) => setGroupeSanguin(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        className="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Link className="Regester" to="/PatientProfile"></Link>
                    <button onClick={Regester}>Regester</button>
                    <div className="show-password" onClick={handleEye}>
                        <i className="fa fa-eye" aria-hidden="true"></i>
                    </div>
                    <div>
                        <Link to="/Regester">you have an account ? Log in</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}