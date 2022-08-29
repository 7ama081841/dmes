import React from "react";
import "./style.css";
import {Link} from "react-router-dom"

export default function Home() {
    return (
        <div className="home">
            <div className="overlay">
                <div>
                    <div className="container">
                        <h1>dmes</h1>

                        <div className="buttons">
                            <Link to="Regester">log in</Link>
                            <Link to="SinUpSinIn">sign up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
