export function Login() {
    return (
        <div>
            <h2>Login</h2>
            <form>
                <label>
                    <span>Username</span>
                    <input type="text" placeholder="Enter username" required />
                </label>
                <label>
                    <span>Password</span>
                    <input type="password" placeholder="Password" required />
                </label>
                <div>
                    <label>
                        <input type="checkbox" />
                        <span>Remember me</span>
                    </label>
                    <a href="/">Forgot your password?</a>
                </div>
                <button type="submit">Login</button>
            </form>
            <a href="/signup">Create New Account</a>
        </div>
    );
}
