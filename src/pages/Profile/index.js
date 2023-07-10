import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { PostsContext } from "../../contexts/PostsContext";
import { AuthContext } from "../../contexts/AuthContext";
import { UsersContext } from "../../contexts/UsersContext";

import { Header } from "../../components/Header";
import { Post } from "../../components/Post";
import { Suggestions } from "../../components/Suggestions";

import "./index.css";

export function Profile() {
    const { posts } = useContext(PostsContext);
    const { loggedInUser, logoutHandler } = useContext(AuthContext);
    const {
        editLoggedInUser,
        getUserByUsername,
        followUser,
        unfollowUser,
        isFollowing,
    } = useContext(UsersContext);

    const { username } = useParams();
    const [user, setUser] = useState();

    const [editProfileData, setEditProfileData] = useState(loggedInUser);
    const [showEditProfileDialog, setShowEditProfileDialog] = useState(false);

    const [showDefaultAvatars, setShowDefaultAvatars] = useState(false);

    const defaultAvatars = [
        "https://res.cloudinary.com/dt6nk7xus/image/upload/v1688355216/v-connect/default-avatars/avatar-svgrepo-com_1_p9yfje.svg",
        "https://res.cloudinary.com/dt6nk7xus/image/upload/v1688355216/v-connect/default-avatars/avatar-svgrepo-com_h15jmv.svg",
        "https://res.cloudinary.com/dt6nk7xus/image/upload/v1688355216/v-connect/default-avatars/avatar-svgrepo-com_3_ki4lay.svg",
        "https://res.cloudinary.com/dt6nk7xus/image/upload/v1688355215/v-connect/default-avatars/avatar-svgrepo-com_2_p0h10c.svg",
        "https://res.cloudinary.com/dt6nk7xus/image/upload/v1688355214/v-connect/default-avatars/avatar-svgrepo-com_4_rznwbb.svg",
        "https://res.cloudinary.com/dt6nk7xus/image/upload/v1688355214/v-connect/default-avatars/avatar-svgrepo-com_5_i6dyi1.svg",
        "https://res.cloudinary.com/dt6nk7xus/image/upload/v1688355214/v-connect/default-avatars/avatar-svgrepo-com_6_m4ed1k.svg",
        "https://res.cloudinary.com/dt6nk7xus/image/upload/v1688355214/v-connect/default-avatars/avatar-svgrepo-com_7_vzrht9.svg",
        "https://res.cloudinary.com/dt6nk7xus/image/upload/v1688355214/v-connect/default-avatars/avatar-portrait-svgrepo-com_wvwz6j.svg",
    ];

    useEffect(() => {
        // change user profile when username changes
        setUser(getUserByUsername(username));
    }, [username]);

    useEffect(() => {
        if (username === loggedInUser.username) {
            setUser(getUserByUsername(username));
        }

        setEditProfileData(loggedInUser);
    }, [loggedInUser]);

    return user != undefined ? (
        <div className="container">
            <Header />
            <div className="posts">
                <div>
                    <div className="profile__bg-img-avatar">
                        <img
                            className="profile__background-image"
                            src="https://res.cloudinary.com/dt6nk7xus/image/upload/v1687239439/v-connect/posts-images/universe_gktdhy.jpg"
                        />
                        <img
                            className="profile__avatar"
                            src={user.profileImageURL}
                        />
                        {user.username === loggedInUser.username ? (
                            <div className="profile__btns">
                                <button
                                    className="profile__btn button button--secondary"
                                    onClick={() =>
                                        setShowEditProfileDialog(true)
                                    }
                                >
                                    Edit Profile
                                </button>
                                <button
                                    className="profile__btn button button--danger"
                                    onClick={() => {
                                        logoutHandler();
                                    }}
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="profile__btns">
                                <button
                                    className="profile__btn button button--secondary"
                                    onClick={() => {
                                        isFollowing(user._id)
                                            ? unfollowUser(user._id)
                                            : followUser(user._id);
                                    }}
                                >
                                    {isFollowing(user._id)
                                        ? "Unfollow"
                                        : "Follow"}
                                </button>
                            </div>
                        )}
                    </div>
                    <p className="profile__name">
                        {user.firstName} {user.lastName}
                    </p>
                    <p className="profile__username">@{user.username}</p>
                    <p className="profile__bio">{user.bio}</p>
                    <div>
                        <a
                            className="profile__bio-link"
                            href={user.portfolioURL}
                            target="_blank"
                        >
                            More about me
                        </a>
                    </div>

                    <div className="profile__metadata">
                        <p>
                            <span className="profile__count">
                                {
                                    posts?.filter(
                                        ({ username }) =>
                                            user.username === username
                                    ).length
                                }
                            </span>{" "}
                            Posts
                        </p>

                        <p>
                            <span className="profile__count">
                                {user.following.length}
                            </span>{" "}
                            Following
                        </p>
                        <p>
                            <span className="profile__count">
                                {user.followers.length}
                            </span>{" "}
                            Followers
                        </p>
                    </div>
                </div>

                <div>
                    <h2>Posts</h2>
                    {posts
                        ?.filter(({ username }) => {
                            // filter and then show logged in user posts
                            return user.username === username;
                        })
                        .map((post) => (
                            <Post key={post._id} post={post} />
                        ))}
                </div>
            </div>
            <div className="search-and-suggestions">
                <input
                    className="search"
                    type="search"
                    placeholder="Search for users"
                />
                <Suggestions />
            </div>
            <div
                className="modal-container"
                style={{ display: showEditProfileDialog ? "block" : "none" }}
            >
                <div className="modal">
                    <div className="edit-profile">
                        <div className="edit-profile__edit-avatar">
                            <div className="profile__header">
                                <div
                                    className="edit-profile__avatar-container"
                                    onClick={() =>
                                        setShowDefaultAvatars(
                                            !showDefaultAvatars
                                        )
                                    }
                                >
                                    <img
                                        className="edit-profile__avatar"
                                        src={editProfileData.profileImageURL}
                                    />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16px"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="edit-profile__edit-icon"
                                    >
                                        <path
                                            d="M18.9445 9.1875L14.9445 5.1875M18.9445 9.1875L13.946 14.1859C13.2873 14.8446 12.4878 15.3646 11.5699 15.5229C10.6431 15.6828 9.49294 15.736 8.94444 15.1875C8.39595 14.639 8.44915 13.4888 8.609 12.562C8.76731 11.6441 9.28735 10.8446 9.946 10.1859L14.9445 5.1875M18.9445 9.1875C18.9445 9.1875 21.9444 6.1875 19.9444 4.1875C17.9444 2.1875 14.9445 5.1875 14.9445 5.1875M20.5 12C20.5 18.5 18.5 20.5 12 20.5C5.5 20.5 3.5 18.5 3.5 12C3.5 5.5 5.5 3.5 12 3.5"
                                            stroke="#000000"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="profile__header-data">
                                    <span>
                                        {loggedInUser.firstName}{" "}
                                        {loggedInUser.lastName}
                                    </span>
                                    <span className="profile__username">
                                        @{loggedInUser.username}
                                    </span>
                                </div>
                            </div>
                            <div
                                className="edit-avatar-options"
                                style={{
                                    display: showDefaultAvatars
                                        ? "block"
                                        : "none",
                                }}
                            >
                                <div className="select-avatar-title">
                                    Select Avatar
                                </div>
                                <div className="default-avatars">
                                    {defaultAvatars.map((avatar) => (
                                        <img
                                            className="default-avatar"
                                            src={avatar}
                                            onClick={() =>
                                                setEditProfileData(
                                                    (editProfileData) => ({
                                                        ...editProfileData,
                                                        profileImageURL: avatar,
                                                    })
                                                )
                                            }
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="edit-profile__bio">
                                <span>Bio</span>
                                <textarea
                                    className="edit-profile__textarea"
                                    rows="10"
                                    cols="70"
                                    placeholder="What's happening"
                                    value={editProfileData.bio}
                                    onChange={(event) => {
                                        setEditProfileData(
                                            (editProfileData) => ({
                                                ...editProfileData,
                                                bio: event.target.value,
                                            })
                                        );
                                    }}
                                />
                            </div>
                            <div>
                                <label>
                                    Portfolio URL{" "}
                                    <input
                                        className="portfolio-url-input"
                                        type="url"
                                        name="portfolioURL"
                                        value={editProfileData.portfolioURL}
                                        onChange={(event) =>
                                            setEditProfileData(
                                                (editProfileData) => ({
                                                    ...editProfileData,
                                                    portfolioURL:
                                                        event.target.value,
                                                })
                                            )
                                        }
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="edit-profile__buttons">
                            <button
                                className="edit-profile__profile-btn button button--secondary"
                                onClick={() => setShowEditProfileDialog(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="edit-profile__profile-btn button button--primary"
                                onClick={() => {
                                    editLoggedInUser(editProfileData);
                                    setShowEditProfileDialog(false);
                                    setShowDefaultAvatars(false);
                                }}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        "Loading"
    );
}
