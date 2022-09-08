import React, { useState } from "react";
import "./style.css";
import { doctors } from "../../api";
import { patient } from "../../api";
import { Link } from "react-router-dom";

export default function PatientProfile() {
    const [doc, setDoc] = useState("");
    const [pati, setPati] = useState("");
    const [detile, setDetile] = useState([]);

    const showDetals = (object, id) => {
        setDetile([object]);
    };

    const deleteDetile = () => {
        setDetile([]);
    };

    return (
        <div className="patient-profile">
            <div className="nav">
                <ul>
                    <li>profile</li>
                    <li>
                        <Link to="/">Deconnect</Link>
                    </li>
                </ul>
            </div>
            <div className="demande-section">
                <div key="1">
                    <div>
                        <p>demande d'ajout</p>
                        <p>helmi fakhfékh</p>
                    </div>
                    <div>
                        <button className="refuse">réfuse</button>
                        <button className="accepte">accepte</button>
                    </div>
                </div>

                <div key="2">
                    <div>
                        <p>demande d'ajout</p>
                        <p>helmi fakhfékh</p>
                    </div>
                    <div>
                        <button className="refuse">réfuse</button>
                        <button className="accepte">accepte</button>
                    </div>
                </div>
                <hr />
                <div>
                    <div>
                        <p>demande de consultation</p>
                        <p>zouhair bouchleka</p>
                        <p>800-230-410</p>
                    </div>
                    <div>
                        <button className="refuse">réfuse</button>
                        <button className="accepte">accepte</button>
                    </div>
                </div>
                <div>
                    <div>
                        <p>demande de consultation</p>
                        <p>zouhair bouchleka</p>
                        <p>800-230-410</p>
                    </div>
                    <div>
                        <button className="refuse">réfuse</button>
                        <button className="accepte">accepte</button>
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
                                <div>
                                    <div className="" key={key}>
                                        <p>{doctor.first_name}</p>
                                        <p>{doctor.adress}</p>
                                        <p>{doctor.tel}</p>
                                    </div>
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
                            .map((patient, key) => (
                                <li
                                    key={key}
                                    onClick={() =>
                                        showDetals(patient, patient.id)
                                    }
                                >
                                    <p>{patient.first_name}</p>
                                    <p>{patient.adress}</p>
                                    <p>{patient.tel}</p>
                                </li>
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
