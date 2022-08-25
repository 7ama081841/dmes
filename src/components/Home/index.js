import React from "react";
import "./style.css";

export default function Home() {
    return (
        <div className="home">
            <div className="overlay">
                <div>
                    <div className="container">
                        <h1>dmes</h1>

                        <div className="buttons">
                            <button>sign in</button>
                            <button>sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
