import Home from "./pages/home/Home.jsx";

import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Settings from "./pages/settings/Settings.jsx";
import Write from "./pages/write/Write.jsx";
import { Single } from "./pages/single/Single.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context.js";
import Topbar from "./components/top/Topbar.jsx";
function App() {
  const { user } = useContext(Context);
  return (
    <>
      <Topbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/write"
          element={user ? <Write /> : <Navigate to="/register" />}
        />
        <Route
          path="/settings"
          element={user ? <Settings /> : <Navigate to="/register" />}
        />
        <Route path="/api/posts/:postId" element={<Single />} />
      </Routes>
    </>
  );
}

export default App;
