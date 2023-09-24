import Home from "./pages/home/Home.jsx";
import Topbar from "./components/topbar/topbar.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Settings from "./pages/settings/Settings.jsx";
import Write from "./pages/write/Write.jsx";
import { Single } from "./pages/single/Single.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const user = false;
  return (
    <>
      <Topbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/Blog-App" element={<Home />} />
          <Route
            path="/Blog-App/register"
            element={user ? <Home /> : <Register />}
          />
          <Route path="/Blog-App/login" element={user ? <Home /> : <Login />} />
          <Route
            path="/Blog-App/write"
            element={user ? <Write /> : <Register />}
          />
          <Route
            path="/Blog-App/settings"
            element={user ? <Settings /> : <Register />}
          />
          <Route path="/Blog-App/post/:postId" element={<Single />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
