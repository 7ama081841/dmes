import React from "react";
import "./style.css";

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
                    <h2>log in</h2>
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
                        <label htmlFor="remmember">remmember me</label>
                    </div>
                    <div>
                        <a href="e">if you forget your password click here</a>
                    </div>
                    <div>
                        <a href="e">create new account</a>
                    </div>
                </div>
            </form>
        </div>
    );
}
