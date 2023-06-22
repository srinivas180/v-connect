import { useContext } from "react";
import { BookmarksContext } from "../../contexts/BookmarksContext";

import { PostsContext } from "../../contexts/PostsContext";
import { UsersContext } from "../../contexts/UsersContext";
import "./index.css";

export function Post({ post }) {
    const { users } = useContext(UsersContext);
    const { likePost, isLiked, removeLike } = useContext(PostsContext);
    const { bookmarkPost, isBookmarked } = useContext(BookmarksContext);

    const user = users.find(({ username }) => username === post.username);

    return (
        <div className="post">
            <div>
                <img className="post__profile-img" src={user.profileImageURL} />
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
                            <i className="fa fa-heart" aria-hidden="true"></i>
                        </span>
                    ) : (
                        <span
                            onClick={() => {
                                likePost(post._id);
                            }}
                            className="post__like"
                        >
                            <i className="fa fa-heart-o" aria-hidden="true"></i>
                        </span>
                    )}
                    {isBookmarked(post._id) ? (
                        <span className="post__bookmark">
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
        </div>
    );
}
