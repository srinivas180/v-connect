import { useContext } from "react";

import { Header } from "../../components/Header";
import { Post } from "../../components/Post";
import { Suggestions } from "../../components/Suggestions";
import { BookmarksContext } from "../../contexts/BookmarksContext";
import { PostsContext } from "../../contexts/PostsContext";

export function Bookmarks() {
    const { bookmarks } = useContext(BookmarksContext);
    const { posts } = useContext(PostsContext);

    return (
        <div className="container">
            <Header />
            <div className="posts">
                <h2 className="heading">Bookmarks</h2>
                {bookmarks.length === 0 ? (
                    <span>No Bookmarks Yet</span>
                ) : (
                    bookmarks.map((bookmark) => {
                        const post = posts.find(
                            (post) => post._id === bookmark._id
                        );
                        return <Post key={post._id} post={post} />;
                    })
                )}
            </div>
            <div className="search-and-suggestions">
                <input type="search" placeholder="Search for users" />
                <Suggestions />
            </div>
        </div>
    );
}
