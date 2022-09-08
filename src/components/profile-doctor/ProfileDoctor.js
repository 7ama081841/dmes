import React, { useEffect, useState } from "react";
import "./profileDoctor.css";
import { Link } from "react-router-dom";
import { doctorProfile } from "../../api";

export default function ProfileDoctor() {
    const [data, setData] = useState();

    // setData(data + 1)

    // this is useState for change data
    const [nom1, seNom1] = useState(doctorProfile[0].nom);
    const [prenom1, setPrenom1] = useState(doctorProfile[0].prenom);
    const [adresseaCbinet1, setAdresseaCbinet1] = useState(doctorProfile[0].adresseCabinet);
    const [telephone1, setTelephone1] = useState(doctorProfile[0].telephone);
    const [specialite1, setSpecialite1] = useState(doctorProfile[0].specialite);
    const [nomHopital, setNomHopital] = useState(doctorProfile[0].nomHopital);
    const [password1, setPassword1] = useState(doctorProfile[0].password);

    const updateProfile = () => {
        const span = document.querySelectorAll("span");
        const input = document.querySelectorAll("input");
        const annuler = document.querySelector(".annuler");
        const confirmer = document.querySelector(".confirmer");
        const modifier = document.querySelector(".modifier");

        span.forEach((el) => (el.className = "none"));

        annuler.classList.remove("none");
        modifier.classList.add("none");
        confirmer.classList.remove("none");

        input.forEach((input) => (input.className = ""));
    };

    const annulerFunc = () => {
        const span = document.querySelectorAll("span");
        const input = document.querySelectorAll("input");

        const annuler = document.querySelector(".annuler");
        const confirmer = document.querySelector(".confirmer");
        const modifier = document.querySelector(".modifier");

        annuler.classList.add("none");
        confirmer.classList.add("none");
        modifier.classList.remove("none");

        span.forEach((el) => (el.className = ""));
        input.forEach((input) => (input.className = "none"));
    };

    const confirmerFunc = (e) => {
        e.preventDefault();

        doctorProfile[0].nom = nom1;
        doctorProfile[0].prenom = prenom1;
        doctorProfile[0].adresseCabinet = adresseaCbinet1;
        doctorProfile[0].telephone = telephone1;
        doctorProfile[0].specialite = specialite1;
        doctorProfile[0].nomHopital = nomHopital;
        doctorProfile[0].password = password1;
        
        setData(data + 1);

        annulerFunc();
        
        console.log({ profile: doctorProfile });

    };

    useEffect(() => {}, [data]);

    return (
        <div className="profile-doctor">
            <nav>
                <div className="container">
                    <ul>
                        <li>
                            <Link to="/DoctorProfile">Dashboard</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {/*doctorProfile && 
                doctorProfile.map((obj , key ) => (
                <div key={key} className="doctor-info">
                    <div>
                        nom : <span> {obj.nom} </span>
                        <input
                            type="text"
                            placeholder="modifier nom"
                            className="none"
                            defaultValue={obj.nom}
                            onChange={(e) => seNom1(e.target.value)}
                        />
                    </div>
                    <div>
                        prénom :<span> {obj.prenom} </span>
                        <input
                            type="text"
                            placeholder="modifier prénom"
                            className="none"
                            defaultValue={obj.prenom}
                            onChange={(e) => setPrenom1(e.target.value)}
                        />
                    </div>
                    <div>
                        adresse cabinet :<span>{obj.adresseCabinet} </span>
                        <input
                            type="text"
                            placeholder="modifier adresse cabinet "
                            className="none"
                            defaultValue={obj.adresseCabinet}
                            onChange={(e) => setAdresseaCbinet1(e.target.value)}
                        />
                    </div>
                    <div>
                        téléphone :<span> {obj.telephone}</span>
                        <input
                            type="text"
                            placeholder="modifier téléphone"
                            className="none"
                            defaultValue={obj.telephone}
                            onChange={(e) => setTelephone1(e.target.value)}
                        />
                    </div>
                    <div>
                        spécialité :<span> {obj.specialite}</span>
                        <input
                            type="text"
                            placeholder="modifier spécialité"
                            className="none"
                            defaultValue={obj.specialite}
                            onChange={(e) => setSpecialite1(e.target.value)}
                        />
                    </div>
                    <div>
                        nom hôpital : <span>{obj.nomHopital} </span>
                        <input
                            type="text"
                            placeholder="modifier nom hôpital"
                            className="none"
                            defaultValue={obj.nomHopital}
                            onChange={(e) => setNomHopital(e.target.value)}
                        />
                    </div>
                    <div>
                        password : <span>{obj.password} </span>
                        <input
                            type="text"
                            placeholder="modifier password"
                            className="none"
                            defaultValue={obj.password}
                            onChange={(e) => setPassword1(e.target.value)}
                        />
                    </div>

                    <div className="buttons">
                        <button
                            className=" modifier button"
                            onClick={() => updateProfile()}
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
                            onClick={confirmerFunc}
                            className="confirmer none button"
                        >
                            confirmer
                        </button>
                    </div>
                </div>
                ))*/}
            {doctorProfile &&
                doctorProfile.map((obj, key) => (
                    <div key={key} className="doctor-info">
                        <div>
                            nom : <span> {obj.nom} </span>
                            <input
                                type="text"
                                placeholder="modifier nom"
                                className="none"
                                defaultValue={obj.nom}
                                onChange={(e) => seNom1(e.target.value)}
                            />
                        </div>
                        <div>
                            prénom :<span> {obj.prenom} </span>
                            <input
                                type="text"
                                placeholder="modifier prénom"
                                className="none"
                                defaultValue={obj.prenom}
                                onChange={(e) => setPrenom1(e.target.value)}
                            />
                        </div>
                        <div>
                            adresse cabinet :<span>{obj.adresseCabinet} </span>
                            <input
                                type="text"
                                placeholder="modifier adresse cabinet "
                                className="none"
                                defaultValue={obj.adresseCabinet}
                                onChange={(e) =>
                                    setAdresseaCbinet1(e.target.value)
                                }
                            />
                        </div>
                        <div>
                            téléphone :<span> {obj.telephone}</span>
                            <input
                                type="text"
                                placeholder="modifier téléphone"
                                className="none"
                                defaultValue={obj.telephone}
                                onChange={(e) => setTelephone1(e.target.value)}
                            />
                        </div>
                        <div>
                            spécialité :<span> {obj.specialite}</span>
                            <input
                                type="text"
                                placeholder="modifier spécialité"
                                className="none"
                                defaultValue={obj.specialite}
                                onChange={(e) => setSpecialite1(e.target.value)}
                            />
                        </div>
                        <div>
                            nom hôpital : <span>{obj.nomHopital} </span>
                            <input
                                type="text"
                                placeholder="modifier nom hôpital"
                                className="none"
                                defaultValue={obj.nomHopital}
                                onChange={(e) => setNomHopital(e.target.value)}
                            />
                        </div>
                        <div>
                            password : <span>{obj.password} </span>
                            <input
                                type="text"
                                placeholder="modifier password"
                                className="none"
                                defaultValue={obj.password}
                                onChange={(e) => setPassword1(e.target.value)}
                            />
                        </div>

                        <div className="buttons">
                            <button
                                className=" modifier button"
                                onClick={() => updateProfile()}
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
                                onClick={confirmerFunc}
                                className="confirmer none button"
                            >
                                confirmer
                            </button>
                        </div>
                    </div>
                ))}
        </div>
    );
}
