import { Routes, Route } from "react-router-dom";

import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import "./App.css";
import { Header } from "./components/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </div>
    );
}

export default App;
