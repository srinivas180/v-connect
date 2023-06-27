import { useState, useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import { PostsContext } from "../../contexts/PostsContext";
import "./index.css";

export function EditPost({ post, setShowEditDialog }) {
    const [editPostData, setEditPostData] = useState(post);
    const { loggedInUser } = useContext(AuthContext);
    const { editPost } = useContext(PostsContext);

    return (
        <div className="modal-container">
            <div className="modal">
                <div className="edit-post">
                    <div>
                        <img
                            className="post__profile-img"
                            src={loggedInUser.profileImageURL}
                        />
                    </div>
                    <div>
                        <textarea
                            className="edit-post__textarea"
                            rows="10"
                            cols="75"
                            placeholder="What's happening"
                            value={editPostData.content}
                            onChange={(event) => {
                                setEditPostData((editPostData) => ({
                                    ...editPostData,
                                    content: event.target.value,
                                }));
                            }}
                        />
                        <div className="edit-post__buttons">
                            <button
                                className="edit-post__post-btn button button--secondary"
                                onClick={() => setShowEditDialog(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="edit-post__post-btn button button--primary"
                                onClick={() => {
                                    editPost(editPostData);
                                    setShowEditDialog(false);
                                }}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
