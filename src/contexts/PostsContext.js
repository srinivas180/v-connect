import { createContext, useEffect, useState } from "react";

export const PostsContext = createContext();

export function PostsProvider({ children }) {
    const [posts, setPosts] = useState();

    const getPosts = async () => {
        const response = await fetch("/api/posts/");

        if (response.status === 200) {
            const json = await response.json();
            setPosts(json.posts);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <PostsContext.Provider value={{ posts }}>
            {children}
        </PostsContext.Provider>
    );
}
