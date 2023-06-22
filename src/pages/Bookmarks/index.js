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
                {bookmarks.map((bookmarkPostId) => {
                    const post = posts.find(
                        (post) => post._id === bookmarkPostId
                    );
                    return <Post post={post} />;
                })}
            </div>
            <div className="search-and-suggestions">
                <input type="search" placeholder="Search for users" />
                <Suggestions />
            </div>
        </div>
    );
}
