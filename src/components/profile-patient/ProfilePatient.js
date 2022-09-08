import React, { useEffect, useState } from "react";
import "./profile-patient.css";
import { Link } from "react-router-dom";
import { patient, patients, patientDossiers2 } from "../../api";

export default function ProfilePatient() {
    const [data, setData] = useState(patients);
    const [idDossier, setIdDossier] = useState();
    const [numDossier, setNumIdDossier] = useState();

    // this is useState for change data
    const [nom1, seNom1] = useState(patients[0].nom);
    const [prenom1, setPrenom1] = useState(patients[0].prenom);
    const [adressea1, setAdressea1] = useState(patients[0].adresse);
    const [telephone1, setTelephone1] = useState(patients[0].telephone1);
    const [groupeSanguin1, setGroupeSanguin1] = useState(
        patients[0].groupeSanguin1
    );
    const [password1, setPassword1] = useState(patients[0].password);

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

        patients[0].nom = nom1;
        patients[0].prenom = prenom1;
        patients[0].adresse = adressea1;
        patients[0].telephone = telephone1;
        patients[0].groupeSanguin = groupeSanguin1;
        patients[0].password = password1;

        annulerFunc();

        setData(data + 1);

    };

    const showDetals = (id) => {
        setIdDossier(id);

        const details = document.querySelector(".details");

        details.classList.remove("none");

        // console.log(patientDossiers2[0].Dossiers);
    };

    useEffect(() => {}, [data]);

    // const deleteElement = (e) => {
    //     e.target.parentElement.classList.add("none");
    // };

    const Consult = (dossier) => {

        // console.log(dossier);
        
        setNumIdDossier(dossier);

        const infoPatient = document.querySelector(".info-patient");

        infoPatient.classList.remove("none")

        // console.log(
        //     patientDossiers2[0].Dossiers.filter(
        //         (el) => el.numeroDossier === dossier
        //     )
        // );
    };

    const hideData = (e) => {
        e.target.parentElement.classList.add("none");
    };

    return (
        <div className="profile-patient">
            <nav>
                <div className="container">
                    <ul>
                        <li>
                            <Link to="/PatientProfile">Dashboard</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {patients &&
                patients.map((obj, key) => (
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
                            adresse :<span>{obj.adresse} </span>
                            <input
                                type="text"
                                placeholder="modifier adresse cabinet "
                                className="none"
                                defaultValue={obj.adresse}
                                onChange={(e) => setAdressea1(e.target.value)}
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
                            groupe sanguin :<span> {obj.groupeSanguin}</span>
                            <input
                                type="text"
                                placeholder="modifier groupe sanguin"
                                className="none"
                                defaultValue={obj.specialite}
                                onChange={(e) =>
                                    setGroupeSanguin1(e.target.value)
                                }
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

            <div className="patient-section">
                <div className="search-parent">
                    <p> numéro des dossiers </p>
                </div>
                <div className="titre">
                    <p>numéro de dossier</p>
                    <p>date</p>
                    <p></p>
                </div>
                <div className="patients-names">
                    <ul>
                        {patientDossiers2[0].Dossiers.map((obj) => (
                            <li key={patient.id}>
                                <p>{obj.numeroDossier}</p>
                                <p>{obj.date}</p>
                                <p>
                                    {
                                        <button
                                            onClick={() =>
                                                Consult(obj.numeroDossier)
                                            }
                                        >
                                            Consult
                                        </button>
                                    }
                                </p>
                            </li>
                        ))}

                        {/*patientDossiers2
                            .filter((obj) => obj.id === idDossier)
                            .map((el) =>
                                el.Dossiers.map((obj) => (
                                    <div key={obj.id} className="details none ">
                                        <div className="data d1">
                                            <p>numéro de dossier</p>
                                            <p>date</p>
                                        </div>
                                        <div className="data">
                                            <p> {obj.numeroDossier} </p>
                                            <p> {obj.date} </p>
                                            <button
                                                onClick={() =>
                                                    Consult(
                                                        idDossier,
                                                        obj.numeroDossier
                                                    )
                                                }
                                            >
                                                Consult
                                            </button>
                                            <button className="ajouter">
                                                ajouter
                                            </button>
                                        </div>

                                        <div
                                            className="x"
                                            onClick={deleteElement}
                                        >
                                            x
                                        </div>
                                    </div>
                                ))
                                            )*/}

                        {patientDossiers2[0].Dossiers.filter(
                            (el) => el.numeroDossier === numDossier
                        ).map((obj, key) => (
                            <div key={key} className="info-patient none">
                                <div onClick={hideData} className="x">
                                    x
                                </div>

                                <div>
                                    <p>nom et prénom patient :</p>
                                    <p className="ml">
                                        {obj.nomEtPrenomPatient}
                                    </p>
                                </div>

                                <div>
                                    <p>nom et prénom médecin :</p>
                                    <p className="ml">
                                        {obj.nomEtPrenomMedecin}
                                    </p>
                                </div>

                                <div>
                                    <p>numéro dossier : </p>
                                    <p className="ml">{obj.numeroDossier}</p>
                                </div>

                                <div>
                                    <p>date : </p>
                                    <p className="ml">{obj.date}</p>
                                </div>

                                <div>
                                    <p>type : </p>
                                    <p className="ml">{obj.type}</p>
                                </div>
                                <div>
                                    <p>raison visite : </p>
                                    <p className="ml">{obj.raisonVisite}</p>
                                </div>
                                <div>
                                    <p>Historique : </p>
                                    <p className="ml">{obj.historique}</p>
                                </div>
                                <div>
                                    <p>médicaments : </p>
                                    <p className="ml">{obj.medicaments}</p>
                                </div>
                                <div>
                                    <p>consultation : </p>
                                    <p className="ml">{obj.consultation}</p>
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
