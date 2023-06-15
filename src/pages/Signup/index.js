import "./index.css";

export function Signup() {
    return (
        <div className="form-container">
            <h2 className="form-container__title">Signup</h2>
            <form className="form">
                <div className="form__field">
                    <label for="fullname" className="form__label">
                        Full Name
                    </label>
                    <input
                        name="fullname"
                        type="text"
                        required
                        className="form__input"
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
                    />
                </div>

                <div className="form__field">
                    <label for="email" className="form__label">
                        Email address
                    </label>
                    <input
                        name="email"
                        type="email"
                        required
                        className="form__input"
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
                <a
                    href="/login"
                    className="form-footer__link link link--decor-none link--primary-color"
                >
                    Login
                </a>
            </p>
        </div>
    );
}
