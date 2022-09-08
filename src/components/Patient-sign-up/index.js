import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function PatientSigUup() {
    const [nom, setNom] = useState({});
    const [prenom, setPrenom] = useState({});
    const [adresse , setAdresse ] = useState({});
    const [telephone , setTelephone] = useState({});
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

    return (
        <div className="Patient-sign-up">
            <form>
                <div className="parent">
                    <h2>Sign up Patient</h2>
                    <input type="text" placeholder="nom" />

                    <input type="text" placeholder="prénom" />

                    <input type="text" placeholder="adresse" />

                    <input type="text" placeholder="téléphone" />

                    <input type="text" placeholder="groupe sanguin" />

                    <input
                        type="password"
                        placeholder="password"
                        className="password"
                    />

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
