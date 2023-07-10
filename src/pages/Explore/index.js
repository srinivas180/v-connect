import { useContext } from "react";

import { Header } from "../../components/Header";
import { Suggestions } from "../../components/Suggestions";
import { Post } from "../../components/Post";

import { AuthContext } from "../../contexts/AuthContext";
import { PostsContext } from "../../contexts/PostsContext";

export function Explore() {
    const { loggedInUser } = useContext(AuthContext);
    const { posts } = useContext(PostsContext);
    return (
        <div className="container">
            <Header />
            <div className="posts">
                <h2 className="heading">Explore</h2>
                {posts
                    ?.filter(({ username }) => {
                        // filter and then show logged in user and
                        // following users posts
                        return !(loggedInUser.username === username);
                    })
                    .map((post) => (
                        <Post key={post._id} post={post} />
                    ))}
            </div>
            <div className="search-and-suggestions">
                <input
                    className="search"
                    type="search"
                    placeholder="Search for users"
                />
                <Suggestions />
            </div>
        </div>
    );
}
