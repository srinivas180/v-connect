import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    const [sortBy, setSortBy] = useState("Latest");
    const navigate = useNavigate();

    useEffect(() => {
        if (loggedInUser === null || loggedInUser === undefined) {
            console.log("navigating........");
            navigate("/login");
        }
    }, []);

    let sortedPosts = posts;

    if (sortBy === "Latest") {
        sortedPosts?.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
    }

    if (sortBy === "Oldest") {
        sortedPosts?.sort(
            (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
    }

    if (sortBy === "Trending") {
        sortedPosts?.sort(
            (a, b) => new Date(b.likes.likeCount) - new Date(a.likes.likeCount)
        );
    }

    return (
        <div className="container">
            <Header />
            <div className="posts">
                <h2 className="heading">Home</h2>
                <NewPost />
                <div className="filters">
                    <h3>Latest Posts</h3>
                    <div className="filters-options">
                        <div className="filters-btn">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20px"
                                height="20px"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="filters-options__icon"
                            >
                                <path
                                    d="M19 3H5C3.58579 3 2.87868 3 2.43934 3.4122C2 3.8244 2 4.48782 2 5.81466V6.50448C2 7.54232 2 8.06124 2.2596 8.49142C2.5192 8.9216 2.99347 9.18858 3.94202 9.72255L6.85504 11.3624C7.49146 11.7206 7.80967 11.8998 8.03751 12.0976C8.51199 12.5095 8.80408 12.9935 8.93644 13.5872C9 13.8722 9 14.2058 9 14.8729L9 17.5424C9 18.452 9 18.9067 9.25192 19.2613C9.50385 19.6158 9.95128 19.7907 10.8462 20.1406C12.7248 20.875 13.6641 21.2422 14.3321 20.8244C15 20.4066 15 19.4519 15 17.5424V14.8729C15 14.2058 15 13.8722 15.0636 13.5872C15.1959 12.9935 15.488 12.5095 15.9625 12.0976C16.1903 11.8998 16.5085 11.7206 17.145 11.3624L20.058 9.72255C21.0065 9.18858 21.4808 8.9216 21.7404 8.49142C22 8.06124 22 7.54232 22 6.50448V5.81466C22 4.48782 22 3.8244 21.5607 3.4122C21.1213 3 20.4142 3 19 3Z"
                                    stroke="#1C274C"
                                    stroke-width="1.5"
                                />
                            </svg>
                        </div>
                        <ul className="filters-options__list">
                            <li className="filters-options__item">
                                <button
                                    className="button filters-options__btn"
                                    onClick={() => setSortBy("Latest")}
                                >
                                    Latest
                                </button>
                            </li>
                            <li className="filters-options__item">
                                <button
                                    className="button filters-options__btn"
                                    onClick={() => setSortBy("Trending")}
                                >
                                    Trending
                                </button>
                            </li>
                            <li className="filters-options__item">
                                <button
                                    className="button filters-options__btn"
                                    onClick={() => setSortBy("Oldest")}
                                >
                                    Oldest
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                {sortedPosts
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
