import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { TopBar } from "./components/topbar/topbar";
import { Register } from "./pages/register/Register";
import { Login } from "./pages/login/Login";
import { Write } from "./pages/write/Write";
import { Settings } from "./pages/settings/Settings";
import { Single } from "./pages/single/Single";

function App() {
  const user = false;

  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/write" element={user ? <Write /> : <Register />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/post/:postId" element={<Single />} />
          {/* <Route path='' element={<About />}/>
          <Route path='' element={<Contact />}/>
          <Route path='' element={<Logout />}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
