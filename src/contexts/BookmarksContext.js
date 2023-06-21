import { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

export const BookmarksContext = createContext();

export function BookmarksProvider({ children }) {
    const [bookmarks, setBookmarks] = useState([]);

    const { encodedToken } = useContext(AuthContext);

    const bookmarkPost = async (postId) => {
        const response = await fetch(`/api/users/bookmark/${postId}`, {
            method: "POST",
            headers: { authorization: encodedToken },
            body: {},
        });

        console.log(response);
        if (response.status === 200) {
            console.log("Bookmarked");
            const json = await response.json();
            setBookmarks(json.bookmarks);
        }
    };

    const isBookmarked = (postId) => bookmarks.includes(postId);

    console.log("bookmarks", bookmarks);

    return (
        <BookmarksContext.Provider
            value={{ bookmarks, bookmarkPost, isBookmarked }}
        >
            {children}
        </BookmarksContext.Provider>
    );
}
