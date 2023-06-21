import { useContext } from "react";

import { PostsContext } from "../../contexts/PostsContext";
import { AuthContext } from "../../contexts/AuthContext";
import { Header } from "../../components/Header";
import { Post } from "../../components/Post";
import "./index.css";

export function Home() {
    const { posts } = useContext(PostsContext);
    const { loggedInUser } = useContext(AuthContext);

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
                            loggedInUser.following.includes(username)
                        );
                    })
                    .map((post) => (
                        <Post post={post} />
                    ))}
            </div>
            <div>
                <input type="search" placeholder="Search for users" />
                <div className="suggestions">
                    <h3 className="suggestions__title"> Who to follow</h3>
                    <div className="suggestions_list">
                        <div className="suggestions__item">
                            <img
                                className="suggestions__avatar"
                                src="https://res.cloudinary.com/dt6nk7xus/image/upload/v1687152698/v-connect/profile-images/23_ghzzzi.jpg"
                            />
                            <div className="suggestions__user">
                                <p>Satya Chandra</p>
                                <p>@satya</p>
                            </div>
                            <button className="suggestions__follow-btn button button--secondary">
                                Follow
                            </button>
                        </div>
                        <div className="suggestions__item">
                            <img
                                className="suggestions__avatar"
                                src="https://res.cloudinary.com/dt6nk7xus/image/upload/v1687152698/v-connect/profile-images/23_ghzzzi.jpg"
                            />
                            <div className="suggestions__user">
                                <p>Satya Chandra</p>
                                <p>@satya</p>
                            </div>
                            <button className="suggestions__follow-btn button button--secondary">
                                Follow
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
