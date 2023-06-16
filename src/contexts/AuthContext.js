import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [encodedToken, setEncodedToken] = useState(
        localStorage.getItem("encodedToken")
    );
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

    const loginHandler = async (userCredentials) => {
        const response = await fetch("/api/auth/login", {
            method: "POST",
            body: JSON.stringify(userCredentials),
        });

        const { encodedToken, foundUser } = await response.json();

        setEncodedToken(encodedToken);
        setUser(foundUser);

        localStorage.setItem("encodedToken", encodedToken);
        localStorage.setItem("user", JSON.stringify(foundUser));
    };

    return (
        <AuthContext.Provider value={{ loginHandler }}>
            {children}
        </AuthContext.Provider>
    );
}
