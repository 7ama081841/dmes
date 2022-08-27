import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function SinUpSinIn() {
    return (
        <div className="sin-up-sin-in">
            <div className="overlay">
                <div className="doctor">
                    <h2>continue as a doctor </h2>

                    <Link to="/medecin">Sign Up</Link>
                </div>
                <div className="patient">
                    <h2>continue as a patient </h2>

                    <Link to="/patient">Sign Up</Link>
                </div>
            </div>
        </div>
    );
}
