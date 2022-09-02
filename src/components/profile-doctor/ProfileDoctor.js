import React from "react";
import "./profileDoctor.css";
import { Link } from "react-router-dom";
import { doctorProfile } from "../../api";

export default function ProfileDoctor() {
    console.log({ profile: doctorProfile });

    const updateProfile = () => {
        const span = document.querySelectorAll("span");
        const input = document.querySelectorAll("input");
        const annuler = document.querySelector(".annuler");
        const confirmer = document.querySelector(".confirmer");
        const modifier = document.querySelector(".modifier");

        span.forEach((el) => (el.className = "none"));
        console.log(confirmer.classList);

        // annuler.classList.remove("none");
        // modifier.classList.add("none");
        // confirmer.classList.remove("none");

        input.forEach((input) => (input.className = ""));
    };

    const annulerFunc = () => {
        const span = document.querySelectorAll("span");
        const input = document.querySelectorAll("input");
        const annuler = document.querySelector(".annuler");
        const confirmer = document.querySelector(".confirmer");
        const modifier = document.querySelector(".modifier");

        // annuler.className += "none";
        // confirmer.className += "none";
        // modifier.className -= "none"

        span.forEach((el) => (el.className = ""));
        input.forEach((input) => (input.className = "none"));
    };

    const confirmerFunc = () => {};

    return (
        <div className="profile-doctor">
            <nav>
                <div className="container">
                    <ul>
                        <li>
                            <Link to="/DoctorProfile">back</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {doctorProfile.map((obj) => (
                <div className="doctor-info">
                    <div>
                        nom : <span> {obj.nom}</span>
                        <input
                            type="text"
                            placeholder="modifier nom"
                            className="none"
                            value={obj.nom}
                        />
                    </div>
                    <div>
                        prénom :<span> {obj.prenom}</span>
                        <input
                            type="text"
                            placeholder="modifier prénom"
                            className="none"
                            value={obj.prenom}
                        />
                    </div>
                    <div>
                        adresse cabinet :<span>{obj.adresseCabinet}</span>
                        <input
                            type="text"
                            placeholder="modifier adresse cabinet "
                            className="none"
                            value={obj.adresseCabinet}
                        />
                    </div>
                    <div>
                        téléphone :<span> {obj.telephone}</span>
                        <input
                            type="text"
                            placeholder="modifier téléphone"
                            className="none"
                            value={obj.telephone}
                        />
                    </div>
                    <div>
                        spécialité :<span> {obj.specialite}</span>
                        <input
                            type="text"
                            placeholder="modifier spécialité"
                            className="none"
                            value={obj.specialite}
                        />
                    </div>
                    <div>
                        nom hôpital :<span> {obj.nomHopital}</span>
                        <input
                            type="text"
                            placeholder="modifier nom hôpital"
                            className="none"
                            value={obj.nomHopital}
                        />
                    </div>
                    <div>
                        password :<span> {obj.password}</span>
                        <input
                            type="text"
                            placeholder="modifier password"
                            className="none"
                            value={obj.password}
                        />
                    </div>
                    <div className="buttons">
                        <button
                            onClick={() => updateProfile()}
                            className="modifier button "
                        >
                            modifier
                        </button>
                        <button
                            onClick={() => annulerFunc()}
                            className="annuler none button"
                        >
                            annuler
                        </button>
                        <button
                            onClick={() => confirmerFunc()}
                            className="confirmer none button"
                        >
                            confirmer
                        </button>
                    </div>
                </div>
            ))}

            <div className="doctor-info">
                <div>
                    nom : <span> mohamed</span>
                    <input
                        type="text"
                        placeholder="modifier nom"
                        className="none"
                    />
                </div>
                <div>
                    prénom :<span> chaabani</span>
                    <input
                        type="text"
                        placeholder="modifier prénom"
                        className="none"
                    />
                </div>
                <div>
                    adresse cabinet :<span>zahrouni</span>
                    <input
                        type="text"
                        placeholder="modifier adresse cabinet "
                        className="none"
                    />
                </div>
                <div>
                    téléphone :<span> 58129031</span>
                    <input
                        type="text"
                        placeholder="modifier téléphone"
                        className="none"
                    />
                </div>
                <div>
                    spécialité :<span> developper</span>
                    <input
                        type="text"
                        placeholder="modifier spécialité"
                        className="none"
                    />
                </div>
                <div>
                    nom hôpital : <span>charnicol</span>
                    <input
                        type="text"
                        placeholder="modifier nom hôpital"
                        className="none"
                    />
                </div>
                <div>
                    password : <span>515189254</span>
                    <input
                        type="text"
                        placeholder="modifier password"
                        className="none"
                    />
                </div>
                <div className="buttons">
                    <button className="button" onClick={() => updateProfile()}>
                        modifier
                    </button>
                    <button
                        onClick={() => annulerFunc()}
                        className="annuler none button"
                    >
                        annuler
                    </button>
                    <button
                        onClick={() => confirmerFunc()}
                        className="confirmer none button"
                    >
                        confirmer
                    </button>
                </div>
            </div>
        </div>
    );
}
