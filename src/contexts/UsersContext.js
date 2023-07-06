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
            setUsers(json.users);
        }
    };

    const followUser = async (followUserId) => {
        const response = await fetch(`/api/users/follow/${followUserId}`, {
            method: "POST",
            headers: { authorization: encodedToken },
            body: {},
        });

        if (response.status === 200) {
            const { followUser, user } = await response.json();

            setLoggedInUser(user);

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

    const editLoggedInUser = async (editedUser) => {
        const response = await fetch("/api/users/edit", {
            method: "POST",
            headers: { authorization: encodedToken },
            body: JSON.stringify({ userData: editedUser }),
        });

        if (response.status === 201) {
            const { user } = await response.json();

            setLoggedInUser(user);
            localStorage.setItem("user", JSON.stringify(user));

            setUsers((users) =>
                users.map((currentUser) =>
                    currentUser.username === user.username ? user : currentUser
                )
            );
        }
    };

    const getUserByUsername = (username) => {
        const user = users.find((user) => username === user.username);
        return user;
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <UsersContext.Provider
            value={{ users, followUser, editLoggedInUser, getUserByUsername }}
        >
            {children}
        </UsersContext.Provider>
    );
}
