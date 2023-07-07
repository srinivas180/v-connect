import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [encodedToken, setEncodedToken] = useState(
        localStorage.getItem("encodedToken")
    );
    const [loggedInUser, setLoggedInUser] = useState(
        JSON.parse(localStorage.getItem("user"))
    );

    const loginHandler = async (userCredentials) => {
        const response = await fetch("/api/auth/login", {
            method: "POST",
            body: JSON.stringify(userCredentials),
        });

        const { encodedToken, foundUser } = await response.json();

        setEncodedToken(encodedToken);
        setLoggedInUser(foundUser);

        localStorage.setItem("encodedToken", encodedToken);
        localStorage.setItem("user", JSON.stringify(foundUser));
    };

    const signupHandler = async (userDetails) => {
        const response = await fetch("/api/auth/signup", {
            method: "POST",
            body: JSON.stringify(userDetails),
        });

        if (response.status === 201) {
            const { encodedToken, createdUser } = await response.json();

            setEncodedToken(encodedToken);
            setLoggedInUser(createdUser);

            // localStorage.setItem("encodedToken", encodedToken);
            // localStorage.setItem("user", JSON.stringify(createdUser));
        }
    };

    return (
        <AuthContext.Provider
            value={{
                encodedToken,
                loggedInUser,
                loginHandler,
                signupHandler,
                setLoggedInUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
