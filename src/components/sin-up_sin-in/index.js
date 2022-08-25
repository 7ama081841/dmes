import React from "react";
import "./style.css";

export default function SinUpSinIn() {
    return (
        <div className="sin-up-sin-in">
            <div className="overlay">
                <div className="doctor">
                    <h2>continue as a doctor </h2>
                    <button>sin in</button>
                </div>
                <div className="patient">
                    <h2>continue as a patient </h2>
                    <button>sin in</button>
                </div>
            </div>
        </div>
    );
}
