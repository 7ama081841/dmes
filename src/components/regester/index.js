import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Regester() {
    const toggleEye = () => {
        const password = document.querySelector(".password");
        const eye = document.querySelector("i");

        if (password.type === "password") {
            password.type = "text";
            eye.classList.remove("fa-eye");
            eye.classList.add("fa-eye-slash");
        } else {
            password.type = "password";
            eye.classList.remove("fa-eye-slash");
            eye.classList.add("fa-eye");
        }
    };

    return (
        <div className="regester">
            <form>
                <div className="parent">
                    <h2>Log in</h2>
                    <input type="text" placeholder="Username" />
                    <input
                        type="password"
                        placeholder="password"
                        className="password"
                    />

                    <div className="show-password" onClick={toggleEye}>
                        <i className="fa fa-eye" aria-hidden="true"></i>
                    </div>

                    <div>
                        <input type="checkbox" id="remmember" />
                        <label htmlFor="remmember">remember me</label>
                    </div>

                    <div className="button" >
                        <Link to="/PatientProfile" className="btn">
                            Log In{" "}
                        </Link>
                    </div>

                    <div>
                        <Link to="/SinUpSinIn">create new account</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}
