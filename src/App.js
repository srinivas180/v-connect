import { Routes, Route } from "react-router-dom";

import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Home } from "./pages/Home";
import { Explore } from "./pages/Explore";
import { Bookmarks } from "./pages/Bookmarks";
import { Profile } from "./pages/Profile";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/bookmarks" element={<Bookmarks />} />
                <Route path="/profile/:username" element={<Profile />} />
            </Routes>
        </div>
    );
}

export default App;
