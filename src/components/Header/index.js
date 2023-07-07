import { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

import "./index.css";

export function Header() {
    const { loggedInUser } = useContext(AuthContext);

    return (
        <>
            {loggedInUser !== undefined && loggedInUser !== null ? (
                <header className="header">
                    <div className="logo">
                        <Link className="logo__link">
                            <h1 className="logo__name">V-Connect</h1>
                        </Link>
                    </div>
                    <nav className="nav">
                        <NavLink
                            to="/"
                            className="nav__link link link--decor-none"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/explore"
                            className="nav__link link link--decor-none"
                        >
                            Explore
                        </NavLink>
                        <NavLink
                            to="/bookmarks"
                            className="nav__link link link--decor-none"
                        >
                            Bookmarks
                        </NavLink>
                        <NavLink
                            to={`/profile/${loggedInUser.username}`}
                            className="nav__link link link--decor-none"
                        >
                            Profile
                        </NavLink>
                    </nav>
                </header>
            ) : (
                "Loading"
            )}
        </>
    );
}
