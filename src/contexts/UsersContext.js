import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const UsersContext = createContext();

export function UsersProvider({ children }) {
    const [users, setUsers] = useState();
    const { encodedToken, setLoggedInUser } = useContext(AuthContext);

    const fetchUsers = async () => {
        const response = await fetch("api/users");

        if (response.status === 200) {
            const json = await response.json();
            console.log(json);
            setUsers(json.users);
        }
    };

    const followUser = async (followUserId) => {
        const response = await fetch(`/api/users/follow/${followUserId}`, {
            method: "POST",
            headers: { authorization: encodedToken },
            body: {},
        });

        console.log("follow users response", response);

        if (response.status === 200) {
            const { followUser, user } = await response.json();

            setLoggedInUser(user);

            console.log(user);

            setUsers((users) =>
                users.map((currentUser) => {
                    if (user.username === currentUser.username) {
                        return user;
                    } else {
                        return currentUser;
                    }
                })
            );
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <UsersContext.Provider value={{ users, followUser }}>
            {children}
        </UsersContext.Provider>
    );
}
