import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const UsersContext = createContext();

export function UsersProvider({ children }) {
    const [users, setUsers] = useState();
    const { encodedToken, loggedInUser, setLoggedInUser, createdUser } =
        useContext(AuthContext);

    const fetchUsers = async () => {
        const response = await fetch("api/users");

        if (response.status === 200) {
            const json = await response.json();
            setUsers(json.users);

            // sets the stored user data in users state
            const storedUser = JSON.parse(localStorage.getItem("user"));
            if (storedUser != null && storedUser != undefined) {
                setUsers((users) => {
                    return users.map((user) =>
                        user.username === storedUser.username
                            ? storedUser
                            : user
                    );
                });
            }
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

    const unfollowUser = async (unfollowUserId) => {
        const response = await fetch(`/api/users/unfollow/${unfollowUserId}`, {
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

    const isFollowing = (userId) => {
        return loggedInUser.following.some(
            (followingUser) => followingUser._id === userId
        );
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        if (users !== undefined) {
            setUsers((users) => [...users, createdUser]);
        }
    }, [createdUser]);

    return (
        <UsersContext.Provider
            value={{
                users,
                followUser,
                unfollowUser,
                isFollowing,
                editLoggedInUser,
                getUserByUsername,
            }}
        >
            {children}
        </UsersContext.Provider>
    );
}
