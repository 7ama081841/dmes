import React, { useEffect, useState } from "react";
import "./style.css";
import { doctors } from "../../api";
import { patient } from "../../api";
import { Link } from "react-router-dom";
import { patientDossiers } from "../../api";

export default function DoctorProfile() {
    const [doc, setDoc] = useState("");
    const [pati, setPati] = useState("");
    const [detile, setDetile] = useState([]);
    const [findId, setFindId] = useState();

    const [nomEtPrenomPatient, setNomEtPrenomPatient] = useState(null);
    const [nomEtPrenomMedecin, setNomEtPrenomMedecin] = useState(null);
    const [numeroDossier, setNumeroDossier] = useState(null);
    const [date, setDate] = useState(null);
    const [type, setType] = useState(null);
    const [raisonVisite, setRaisonVisite] = useState(null);
    const [historique, setHistorique] = useState(null);
    const [medicaments, setMedicaments] = useState(null);
    const [consultation, setConsultation] = useState(null);
    const [idParent, setIdParent] = useState(null);
    const [rerender, setRerender] = useState(null);

    const showDetals = (object, id) => {
        setDetile([object]);
    };

    const deleteDetile = () => {
        setDetile([]);
    };

    const showForm = (id) => {
        const form = document.querySelector("form");

        form.classList.remove("none");

        setIdParent(id);
    };

    const hideForm = () => {
        const form = document.querySelector("form");

        form.classList.add("none");
    };

    const ajouterPatient = () => {
        const form = document.querySelector("form");

        patientDossiers.push([
            {
                id: idParent,
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

        patient.filter((obj) => obj.id === idParent)[0].state = "consultation";

        setRerender(rerender + 1);

        console.log(patientDossiers);

        // patientDossiers.map( object => object.map( obj => obj.dos.map( obj => ( <div></div> ))))

        form.classList.add("none");
    };

    useEffect(() => {}, [rerender]);

    const showData = (id) => {

        setFindId(id);

        setRerender(rerender - 1);

        const data = document.querySelector(".info-patient");

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

            {patientDossiers.map((obj) =>
                obj
                    .filter((el) => el.id === findId)
                    .map((obj) =>
                        obj.dos.map((el, key) => (
                            <div key={key} className="info-patient none">
                                <div onClick={hideData} className="x">
                                    x
                                </div>

                                <div>
                                    <p>nom et prénom patient :</p>
                                    <p className="ml">
                                        {el.nomEtPrenomPatient}
                                    </p>
                                </div>

                                <div>
                                    <p>nom et prénom médecin :</p>
                                    <p className="ml">
                                        {el.nomEtPrenomMedecin}
                                    </p>
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
                    )
            )}

            <div className="demande-section">
                <div>
                    <div className="titre">
                        <p>type de demande</p>
                        <p>nom du patient</p>
                        <p>Etat</p>
                    </div>
                </div>

                {patient
                    .filter((doctor) => doctor.state.includes("ajout"))
                    .map((patient) => (
                        <div key={patient.id}>
                            <div>
                                <div className="titre info">
                                    <p
                                        className="ajout"
                                        onClick={() => showForm(patient.id)}
                                    >
                                        ajout
                                    </p>
                                    <p> {patient.first_name} </p>
                                    <p>accepté</p>
                                </div>
                            </div>
                        </div>
                    ))}

                {patient
                    .filter((doctor) => doctor.state.includes("consultation"))
                    .map((patient) => (
                        <div key={patient.id} className="position">
                            <div>
                                <div className="titre info">
                                    <p
                                        className="consultation"
                                        onClick={() => showData(patient.id)}
                                    >
                                        consultation
                                    </p>
                                    <p> {patient.first_name} </p>
                                    <p>accepté</p>
                                </div>
                            </div>
                        </div>
                    ))}
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

  