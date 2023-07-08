import { Link } from "react-router-dom";

import "./index.css";

import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useState } from "react";

export function Login() {
    const { loginHandler } = useContext(AuthContext);
    const [userCreds, setUserCreds] = useState({ username: "", password: "" });
    return (
        <div className="form-container">
            <h2 className="form-container__title">Login</h2>
            <form
                className="form"
                onSubmit={(event) => {
                    event.preventDefault();
                    loginHandler(userCreds);
                }}
            >
                <div className="form__field">
                    <label htmlFor="username" className="form__label">
                        Username
                    </label>
                    <input
                        name="username"
                        type="text"
                        required
                        value={userCreds.username}
                        onChange={(event) => {
                            setUserCreds((prevUserCreds) => ({
                                ...prevUserCreds,
                                username: event.target.value,
                            }));
                        }}
                        className="form__input"
                    />
                </div>

                <div className="form__field">
                    <div className="form__label">
                        <label for="password">Password</label>
                        <a
                            href="/"
                            className="link link--decor-none link--primary-color"
                        >
                            Forgot your password?
                        </a>
                    </div>

                    <input
                        name="password"
                        type="password"
                        required
                        value={userCreds.password}
                        onChange={(event) => {
                            setUserCreds((prevUserCreds) => ({
                                ...prevUserCreds,
                                password: event.target.value,
                            }));
                        }}
                        className="form__input"
                    />
                </div>
                <button type="submit" className="button button--primary">
                    Login
                </button>
            </form>
            <button
                className="button button--text-only login__guest"
                onClick={() => {
                    const userCredentials = {
                        username: "satyachandra",
                        password: "satyachandra",
                    };

                    loginHandler(userCredentials);
                }}
            >
                Login as Guest
            </button>
            <p className="form-footer">
                <span className="form-footer__text">Not a member? </span>
                <Link
                    to="/signup"
                    className="form-footer__link link link--decor-none link--primary-color"
                >
                    Create New Account
                </Link>
            </p>
        </div>
    );
}
