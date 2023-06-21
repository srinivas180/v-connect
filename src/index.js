import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { AuthProvider } from "./contexts/AuthContext";
import { PostsProvider } from "./contexts/PostsContext";
import { UsersProvider } from "./contexts/UsersContext";
import { BookmarksProvider } from "./contexts/BookmarksContext";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <AuthProvider>
                <UsersProvider>
                    <BookmarksProvider>
                        <PostsProvider>
                            <App />
                        </PostsProvider>
                    </BookmarksProvider>
                </UsersProvider>
            </AuthProvider>
        </Router>
    </React.StrictMode>
);
