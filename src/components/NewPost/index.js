import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import "./index.css";

export function NewPost() {
    const { loggedInUser } = useContext(AuthContext);

    return (
        <div className="post">
            <div>
                <img
                    className="post__profile-img"
                    src={loggedInUser.profileImageURL}
                />
            </div>
            <div>
                <textarea
                    className="new-post__textarea"
                    rows="10"
                    cols="50"
                    placeholder="What's happening"
                />
                <div className="new-post__options">
                    <div className="new-post__icons">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                    </div>
                    <button className="new-post__post-btn button button--primary">
                        post
                    </button>
                </div>
            </div>
        </div>
    );
}
