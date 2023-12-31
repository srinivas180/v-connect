import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { UsersContext } from "../../contexts/UsersContext";

export function Suggestions() {
    const { loggedInUser } = useContext(AuthContext);
    const { users, followUser, unfollowUser, isFollowing } =
        useContext(UsersContext);

    return (
        <div className="suggestions">
            <h3 className="suggestions__title"> Who to follow</h3>
            <div className="suggestions_list">
                {users
                    ?.filter(
                        ({ username }) => !(loggedInUser.username === username)
                    )
                    ?.map((user) => (
                        <div key={user._id} className="suggestions__item">
                            <Link
                                to={`/profile/${user.username}`}
                                className="link link--decor-none"
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
                            </Link>
                            <button
                                className="suggestions__follow-btn button button--secondary"
                                onClick={() => {
                                    isFollowing(user._id)
                                        ? unfollowUser(user._id)
                                        : followUser(user._id);
                                }}
                            >
                                {isFollowing(user._id) ? "Unfollow" : "Follow"}
                            </button>
                        </div>
                    ))}
            </div>
        </div>
    );
}
