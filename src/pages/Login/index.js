import "./index.css";

import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

export function Login() {
    const { loginHandler } = useContext(AuthContext);
    return (
        <div className="login">
            <h2 className="login__title">Login</h2>
            <form className="form">
                <div className="form__field">
                    <label for="username" className="form__label">
                        Username
                    </label>
                    <input
                        name="username"
                        type="text"
                        required
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
                        username: "adarshbalika",
                        password: "adarshBalika123",
                    };

                    loginHandler(userCredentials);
                }}
            >
                Login as Guest
            </button>
            <p className="new-account">
                <span className="new-account__text">Not a member? </span>
                <a
                    href="/signup"
                    className="new-account__link link link--decor-none link--primary-color"
                >
                    Create New Account
                </a>
            </p>
        </div>
    );
}
