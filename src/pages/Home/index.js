import { useContext } from "react";

import { PostsContext } from "../../contexts/PostsContext";
import { AuthContext } from "../../contexts/AuthContext";
import { Header } from "../../components/Header";
import { Post } from "../../components/Post";
import "./index.css";
import { UsersContext } from "../../contexts/UsersContext";
import { Suggestions } from "../../components/Suggestions";
import { NewPost } from "../../components/NewPost";

export function Home() {
    const { posts } = useContext(PostsContext);
    const { loggedInUser } = useContext(AuthContext);

    return (
        <div className="container">
            <Header />
            <div className="posts">
                <h2 className="heading">Home</h2>
                <NewPost />
                {posts
                    ?.filter(({ username }) => {
                        // filter and then show logged in user and
                        // following users posts
                        return (
                            loggedInUser.username === username ||
                            loggedInUser.following.find(
                                (followingUser) =>
                                    username === followingUser.username
                            )
                        );
                    })
                    .map((post) => (
                        <Post key={post._id} post={post} />
                    ))}
            </div>
            <div className="search-and-suggestions">
                <input type="search" placeholder="Search for users" />
                <Suggestions />
            </div>
        </div>
    );
}
