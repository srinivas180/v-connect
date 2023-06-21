import { createContext, useEffect, useState } from "react";

export const UsersContext = createContext();

export function UsersProvider({ children }) {
    const [users, setUsers] = useState();

    const fetchUsers = async () => {
        const response = await fetch("api/users");

        if (response.status === 200) {
            const json = await response.json();
            console.log(json);
            setUsers(json.users);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <UsersContext.Provider value={{ users }}>
            {children}
        </UsersContext.Provider>
    );
}
