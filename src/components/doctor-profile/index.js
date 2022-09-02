import React, { useState } from "react";
import "./style.css";
import { doctors } from "../../api";
import { patient } from "../../api";
import { Link } from "react-router-dom";
// import { dosye } from "../../api";

export default function DoctorProfile() {
    const [doc, setDoc] = useState("");
    const [pati, setPati] = useState("");
    const [detile, setDetile] = useState([]);

    const [donnees, setDonnees] = useState([]);
    // const [dosyes, setDosyes] = useState([]);

    const [nomEtPrenomPatient, setNomEtPrenomPatient] = useState(null);
    const [nomEtPrenomMedecin, setNomEtPrenomMedecin] = useState(null);
    const [numeroDossier, setNumeroDossier] = useState(null);
    const [date, setDate] = useState(null);
    const [type, setType] = useState(null);
    const [raisonVisite, setRaisonVisite] = useState(null);
    const [historique, setHistorique] = useState(null);
    const [medicaments, setMedicaments] = useState(null);
    const [consultation, setConsultation] = useState(null);

    const showDetals = (object, id) => {
        console.log(id);
        console.log(object);

        setDetile([object]);
    };

    const deleteDetile = () => {
        setDetile([]);
    };

    const showForm = () => {
        const form = document.querySelector("form");

        form.classList.remove("none");
    };

    const hideForm = () => {
        const form = document.querySelector("form");

        form.classList.add("none");
    };

    const ajouterPatient = (e) => {
        const form = document.querySelector("form");
        setDonnees([
            {
                id: Math.random(),
                dos: [
                    {
                        nomEtPrenomPatient,
                        nomEtPrenomMedecin,
                        numeroDossier,
                        date,
                        type,
                        raisonVisite,
                        historique,
                        medicaments,
                        consultation,
                    },
                ],
            },
        ]);

        form.classList.add("none")

    };

    const showData = () => {
        const data = document.querySelector(".info-patient");

        console.log(data);

        data.classList.remove("none");
        data.classList.remove("flex");
    };

    const hideData = () => {
        const data = document.querySelector(".info-patient");

        data.classList.add("none");
        data.classList.remove("flex");
    };

    return (
        <div className="doctor-profile">
            <div className="nav">
                <ul>
                    <li>
                        <Link to="/ProfileDoctor">profile</Link>
                    </li>
                    <li>
                        <Link to="/">Deconnect</Link>
                    </li>
                </ul>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="none">
                <div onClick={hideForm} className="x">
                    x
                </div>
                <input
                    type="text"
                    placeholder="nom et prénom patient"
                    onChange={(e) => setNomEtPrenomPatient(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="nom et prénom médecin"
                    onChange={(e) => setNomEtPrenomMedecin(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="numéro dossier"
                    onChange={(e) => setNumeroDossier(e.target.value)}
                />
                <input
                    type="date"
                    placeholder="date"
                    onChange={(e) => setDate(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="type"
                    onChange={(e) => setType(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="raison visite"
                    onChange={(e) => setRaisonVisite(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Historique"
                    onChange={(e) => setHistorique(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="médicaments"
                    onChange={(e) => setMedicaments(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="consultation"
                    onChange={(e) => setConsultation(e.target.value)}
                />
                <div>
                    <button
                        className="btn"
                        onClick={() => {
                            ajouterPatient();
                        }}
                    >
                        ajouter
                    </button>
                </div>
            </form>

            {donnees.map((object) =>
                object.dos.map((el, key) => (
                    <div key={key} className=" info-patient none">
                        <div onClick={hideData} className="x">
                            x
                        </div>

                        <div>
                            <p>nom et prénom patient :</p>
                            <p className="ml">{el.nomEtPrenomPatient}</p>
                        </div>

                        <div>
                            <p>nom et prénom médecin :</p>
                            <p className="ml">{el.nomEtPrenomMedecin}</p>
                        </div>

                        <div>
                            <p>numéro dossier : </p>
                            <p className="ml">{el.numeroDossier}</p>
                        </div>

                        <div>
                            <p>date : </p>
                            <p className="ml">{el.date}</p>
                        </div>

                        <div>
                            <p>type : </p>
                            <p className="ml">{el.type}</p>
                        </div>
                        <div>
                            <p>raison visite : </p>
                            <p className="ml">{el.raisonVisite}</p>
                        </div>
                        <div>
                            <p>Historique : </p>
                            <p className="ml">{el.historique}</p>
                        </div>
                        <div>
                            <p>médicaments : </p>
                            <p className="ml">{el.medicaments}</p>
                        </div>
                        <div>
                            <p>consultation : </p>
                            <p className="ml">{el.consultation}</p>
                        </div>
                    </div>
                ))
            )}

            <div className="demande-section">
                <div>
                    <div className="titre">
                        <p>type de demande</p>
                        <p>nom du patient</p>
                        <p>Etat</p>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="titre info">
                            <p className="ajout" onClick={showForm}>
                                ajout
                            </p>
                            <p>safe selmi</p>
                            <p>accepté</p>
                        </div>
                        <div className="titre">
                            <p className="consultation" onClick={showData}>
                                consultation
                            </p>
                            <p>ahmed hafez</p>
                            <p>réfusé</p>
                        </div>
                        <div className="titre">
                            <p>consultation</p>
                            <p>nourhen slema</p>
                            <p>on attend</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="doctor-section">
                <div className="search-parent">
                    <p> List des doctors </p>
                    <input
                        type="text"
                        placeholder="search"
                        onChange={(e) => setDoc(e.target.value)}
                    />
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>
                <div className="doctors-names">
                    <ul>
                        <div className="titre">
                            <p>Nom De Doctor</p>
                            <p>Adresse</p>
                            <p>numéro de téléphone</p>
                        </div>
                        {doctors
                            .filter((doctor) =>
                                doctor.first_name.toLowerCase().includes(doc)
                            )
                            .map((doctor, key) => (
                                <div key={doctor.id}>
                                    <p>{doctor.first_name}</p>
                                    <p>{doctor.adress}</p>
                                    <p>{doctor.tel}</p>
                                </div>
                            ))}
                    </ul>
                </div>
            </div>
            <div className="patient-section">
                <div className="search-parent">
                    <p> List des patients </p>
                    <input
                        type="text"
                        placeholder="search"
                        onChange={(e) => setPati(e.target.value)}
                    />
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>
                <div className="patients-names">
                    <ul>
                        <div className="titre">
                            <p>Nom De patient</p>
                            <p>Adresse</p>
                            <p>numéro de téléphone</p>
                        </div>
                        {patient
                            .filter((patient) =>
                                patient.first_name.toLowerCase().includes(pati)
                            )
                            .map((patient) => (
                                <div
                                    onClick={() =>
                                        showDetals(patient, patient.id)
                                    }
                                    key={patient.id}
                                >
                                    <li key={patient.id}>
                                        <p>{patient.first_name}</p>
                                        <p>{patient.adress}</p>
                                        <p>{patient.tel}</p>
                                    </li>
                                </div>
                            ))}
                        {detile.map((obj, key) => (
                            <div key={key} className="details">
                                <div className="data d1">
                                    <p>numéro de dossier</p>
                                    <p>date</p>
                                </div>
                                <div className="data">
                                    <p> {obj.num} </p>
                                    <p> {obj.date} </p>
                                    <button>Consult</button>
                                    <button className="ajouter">ajouter</button>
                                </div>

                                <div className="x" onClick={deleteDetile}>
                                    x
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
