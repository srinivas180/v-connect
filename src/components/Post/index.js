import { useContext, useState } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import { BookmarksContext } from "../../contexts/BookmarksContext";
import { PostsContext } from "../../contexts/PostsContext";
import { UsersContext } from "../../contexts/UsersContext";
import { EditPost } from "../EditPost";
import "./index.css";

export function Post({ post }) {
    const { loggedInUser } = useContext(AuthContext);
    const { users } = useContext(UsersContext);
    const { likePost, isLiked, removeLike, deletePost } =
        useContext(PostsContext);
    const { bookmarkPost, isBookmarked, removeBookmark } =
        useContext(BookmarksContext);
    const [showEditDialog, setShowEditDialog] = useState(false);

    const user = users.find(({ username }) => username === post.username);

    return (
        <div>
            <div className="post">
                <div>
                    <img
                        className="post__profile-img"
                        src={user.profileImageURL}
                    />
                </div>
                <div className="post__container">
                    <p className="post__name">{user.firstName}</p>
                    <p className="post__content">{post.content}</p>
                    <div>
                        <img className="post__image" src={post.imageURL} />
                    </div>
                    <div className="post__options">
                        {isLiked(post) ? (
                            <span
                                onClick={() => {
                                    removeLike(post._id);
                                }}
                                className="post__like"
                            >
                                <i
                                    className="fa fa-heart"
                                    aria-hidden="true"
                                ></i>
                            </span>
                        ) : (
                            <span
                                onClick={() => {
                                    likePost(post._id);
                                }}
                                className="post__like"
                            >
                                <i
                                    className="fa fa-heart-o"
                                    aria-hidden="true"
                                ></i>
                            </span>
                        )}
                        {isBookmarked(post._id) ? (
                            <span
                                className="post__bookmark"
                                onClick={() => {
                                    removeBookmark(post._id);
                                }}
                            >
                                <i
                                    className="fa fa-bookmark"
                                    aria-hidden="true"
                                ></i>
                            </span>
                        ) : (
                            <span
                                className="post__bookmark"
                                onClick={() => {
                                    bookmarkPost(post._id);
                                }}
                            >
                                <i
                                    className="fa fa-bookmark-o"
                                    aria-hidden="true"
                                ></i>
                            </span>
                        )}
                    </div>
                </div>
                {loggedInUser.username === post.username ? (
                    <div className="post-menu-container">
                        <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                        <ul className="menu">
                            <li className="menu__item">
                                <button onClick={() => setShowEditDialog(true)}>
                                    Edit
                                </button>
                            </li>
                            <li className="menu__item">
                                <button
                                    onClick={() => {
                                        removeBookmark(post._id);
                                        deletePost(post._id);
                                    }}
                                >
                                    Delete
                                </button>
                            </li>
                        </ul>
                    </div>
                ) : (
                    ""
                )}
            </div>
            {showEditDialog ? (
                <EditPost post={post} setShowEditDialog={setShowEditDialog} />
            ) : (
                ""
            )}
        </div>
    );
}
