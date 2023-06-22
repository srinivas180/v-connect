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

    return (
        <AuthContext.Provider
            value={{
                encodedToken,
                loggedInUser,
                loginHandler,
                setLoggedInUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
