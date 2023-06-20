import "./index.css";

export function Post({ post }) {
    return (
        <div className="post">
            <div>
                <img
                    className="post__profile-img"
                    src="https://picsum.photos/id/100/150"
                />
            </div>
            <div className="post__container">
                <p className="post__name">Satya</p>
                <p className="post__content">Clita tincidunt ut.</p>
                <div>
                    <img
                        className="post__image"
                        src="https://res.cloudinary.com/dt6nk7xus/image/upload/v1687154650/v-connect/posts-images/lon--george-monstera-deliciosa_p7shzo.webp"
                    />
                </div>
            </div>
        </div>
    );
}
