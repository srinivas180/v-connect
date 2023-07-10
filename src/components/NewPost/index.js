import { useContext, useState } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import { PostsContext } from "../../contexts/PostsContext";
import "./index.css";

export function NewPost() {
    const { loggedInUser } = useContext(AuthContext);
    const { addPost } = useContext(PostsContext);
    const [newPostData, setNewPostData] = useState({ content: "" });

    return (
        <div className="post new-post">
            {loggedInUser !== undefined && loggedInUser !== null ? (
                <>
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
                            value={newPostData.content}
                            onChange={(event) => {
                                setNewPostData((newPostData) => ({
                                    ...newPostData,
                                    content: event.target.value,
                                }));
                            }}
                        />
                        <div className="new-post__options">
                            <div className="new-post__icons">
                                <i className="bi bi-card-image"></i>
                                <i className="bi bi-filetype-gif"></i>
                                <i className="bi bi-emoji-smile"></i>
                            </div>
                            <button
                                className="new-post__post-btn button button--primary"
                                onClick={() => {
                                    addPost(newPostData);
                                    setNewPostData({ content: "" });
                                }}
                            >
                                post
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                ""
            )}
        </div>
    );
}
