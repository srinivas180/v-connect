import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [encodedToken, setEncodedToken] = useState();
    const [user, setUser] = useState();

    const loginHandler = async (userCredentials) => {
        const response = await fetch("/api/auth/login", {
            method: "POST",
            body: JSON.stringify(userCredentials),
        });

        const { encodedToken, foundUser } = await response.json();

        setEncodedToken(encodedToken);
        setUser(foundUser);
    };

    return (
        <AuthContext.Provider value={{ loginHandler }}>
            {children}
        </AuthContext.Provider>
    );
}
