import { Link } from "react-router-dom";

import "./index.css";

export function Header() {
    return (
        <header className="header">
            <div className="logo">
                <Link className="logo__link">
                    <h1 className="logo__name">V-Connect</h1>
                </Link>
            </div>
        </header>
    );
}
