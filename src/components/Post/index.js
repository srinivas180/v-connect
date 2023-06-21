import { useContext } from "react";

import { UsersContext } from "../../contexts/UsersContext";
import "./index.css";

export function Post({ post }) {
    const { users } = useContext(UsersContext);
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
            </div>
        </div>
    );
}
