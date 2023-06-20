import { createContext } from "react";

export const PostsContext = createContext();

export function PostsProvider({ children }) {
    return <PostsContext.Provider>{children}</PostsContext.Provider>;
}
