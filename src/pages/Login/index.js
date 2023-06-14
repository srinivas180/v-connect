import "./index.css";

export function Login() {
    return (
        <div className="login-container">
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
        </div>
    );
}
