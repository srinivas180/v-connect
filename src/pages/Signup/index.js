import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import "./index.css";

export function Signup() {
    const { signupHandler } = useContext(AuthContext);
    const [userDetails, setUserDetails] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        bio: "",
        profileImageURL: "",
        portfolioURL: "",
    });

    return (
        <div className="form-container">
            <h2 className="form-container__title">Signup</h2>
            <form
                className="form"
                onSubmit={(event) => {
                    event.preventDefault();

                    signupHandler(userDetails);
                }}
            >
                <div className="form__field">
                    <label htmlFor="firstName" className="form__label">
                        First Name
                    </label>
                    <input
                        name="firstName"
                        type="text"
                        required
                        className="form__input"
                        value={userDetails.firstName}
                        onChange={(event) => {
                            setUserDetails((prevUserDetails) => ({
                                ...prevUserDetails,
                                firstName: event.target.value,
                            }));
                        }}
                    />
                </div>

                <div className="form__field">
                    <label htmlFor="lastName" className="form__label">
                        Last Name
                    </label>
                    <input
                        name="lastName"
                        type="text"
                        required
                        className="form__input"
                        value={userDetails.lastName}
                        onChange={(event) => {
                            setUserDetails((prevUserDetails) => ({
                                ...prevUserDetails,
                                lastName: event.target.value,
                            }));
                        }}
                    />
                </div>

                <div className="form__field">
                    <label for="username" className="form__label">
                        Username
                    </label>
                    <input
                        name="username"
                        type="text"
                        required
                        className="form__input"
                        value={userDetails.username}
                        onChange={(event) => {
                            setUserDetails((prevUserDetails) => ({
                                ...prevUserDetails,
                                username: event.target.value,
                            }));
                        }}
                    />
                </div>

                <div className="form__field">
                    <label for="password" className="form__label">
                        Password
                    </label>

                    <input
                        name="password"
                        type="password"
                        required
                        className="form__input"
                        value={userDetails.password}
                        onChange={(event) => {
                            setUserDetails((prevUserDetails) => ({
                                ...prevUserDetails,
                                password: event.target.value,
                            }));
                        }}
                    />
                </div>

                <div className="form__field">
                    <label for="confirm-password" className="form__label">
                        Confirm Password
                    </label>

                    <input
                        name="confirm-password"
                        type="password"
                        required
                        className="form__input"
                    />
                </div>

                <button type="submit" className="button button--primary">
                    Signup
                </button>
            </form>
            <p className="form-footer">
                <span className="form-footer__text">
                    Already have account?{" "}
                </span>
                <Link
                    to="/login"
                    className="form-footer__link link link--decor-none link--primary-color"
                >
                    Login
                </Link>
            </p>
        </div>
    );
}
