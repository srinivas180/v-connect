import { Link, NavLink } from "react-router-dom";

import "./index.css";

export function Header() {
    return (
        <header className="header">
            <div className="logo">
                <Link className="logo__link">
                    <h1 className="logo__name">V-Connect</h1>
                </Link>
            </div>
            <nav className="nav">
                <NavLink className="nav__link link link--decor-none">
                    Home
                </NavLink>
                <NavLink className="nav__link link link--decor-none">
                    Explore
                </NavLink>
                <NavLink className="nav__link link link--decor-none">
                    Bookmarks
                </NavLink>
                <NavLink className="nav__link link link--decor-none">
                    Profile
                </NavLink>
            </nav>
        </header>
    );
}
