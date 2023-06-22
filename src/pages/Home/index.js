import { useContext } from "react";

import { PostsContext } from "../../contexts/PostsContext";
import { AuthContext } from "../../contexts/AuthContext";
import { Header } from "../../components/Header";
import { Post } from "../../components/Post";
import "./index.css";
import { UsersContext } from "../../contexts/UsersContext";

export function Home() {
    const { posts } = useContext(PostsContext);
    const { loggedInUser } = useContext(AuthContext);
    const { users, followUser } = useContext(UsersContext);

    return (
        <div className="container">
            <Header />
            <div className="posts">
                <h2 className="heading">Home</h2>
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
                <div className="suggestions">
                    <h3 className="suggestions__title"> Who to follow</h3>
                    <div className="suggestions_list">
                        {users
                            ?.filter(
                                ({ username }) =>
                                    !loggedInUser.following.find(
                                        (followingUser) =>
                                            username === followingUser.username
                                    ) && !(loggedInUser.username === username)
                            )
                            ?.map((user) => (
                                <div
                                    key={user._id}
                                    className="suggestions__item"
                                >
                                    <div className="avatar-and-name">
                                        <img
                                            className="suggestions__avatar"
                                            src={user.profileImageURL}
                                        />
                                        <div className="suggestions__user">
                                            <p>{user.firstName}</p>
                                            <p>@{user.username}</p>
                                        </div>
                                    </div>
                                    <button
                                        className="suggestions__follow-btn button button--secondary"
                                        onClick={() => {
                                            followUser(user._id);
                                        }}
                                    >
                                        Follow
                                    </button>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
