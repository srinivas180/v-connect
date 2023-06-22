import { createContext, useContext, useEffect, useState } from "react";

import { AuthContext } from "./AuthContext";

export const PostsContext = createContext();

export function PostsProvider({ children }) {
    const [posts, setPosts] = useState();

    const { encodedToken, loggedInUser } = useContext(AuthContext);

    const getPosts = async () => {
        const response = await fetch("/api/posts/");

        if (response.status === 200) {
            const json = await response.json();
            setPosts(json.posts);
        }
    };

    const likePost = async (postId) => {
        const response = await fetch(`/api/posts/like/${postId}`, {
            method: "POST",
            headers: { authorization: encodedToken },
            body: {},
        });

        console.log(response);

        if (response.status === 201) {
            const json = await response.json();

            console.log(json.posts);
            setPosts(json.posts);
        }
    };

    const isLiked = (post) => {
        return post.likes.likedBy.find(
            ({ username }) => username === loggedInUser.username
        );
    };

    const removeLike = async (postId) => {
        const response = await fetch(`/api/posts/dislike/${postId}`, {
            method: "POST",
            headers: { authorization: encodedToken },
            body: {},
        });

        console.log(response);

        if (response.status === 201) {
            const json = await response.json();

            console.log(json.posts);
            setPosts(json.posts);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <PostsContext.Provider value={{ posts, likePost, isLiked, removeLike }}>
            {children}
        </PostsContext.Provider>
    );
}
