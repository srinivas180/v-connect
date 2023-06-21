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

    const getNonFollowingUsers = (user) => {
        return users?.filter(
            ({ username }) =>
                !user.following.includes(username) &&
                !(user.username === username)
        );
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <UsersContext.Provider value={{ users, getNonFollowingUsers }}>
            {children}
        </UsersContext.Provider>
    );
}
