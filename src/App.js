import { Routes, Route } from "react-router-dom";
import React from "react";
import Goods from "./Components/goods";
import NoMatch from "./Components/nomatch";
import Login from "./Components/login";
import Navigation from "./Components/header";
import Home from "./Components/home";
import RequireAuth from "./Components/context/requireAuth";
import { UserContext } from "./Components/context/contextAuth";
import { setAuthToken } from "./Components/utils/axiosClient";



const AdminAuthRequire = (
  <RequireAuth>
    <Goods />
  </RequireAuth>
);

function App() {
  const [auth, setAuth] = React.useState(false);
  console.log(auth)
  React.useEffect(() => {
    const token = localStorage.getItem('access_token')
    setAuthToken(token)
    if (token) {
      setAuth(true);
    }
  }, [auth]);
  const value = { auth, setAuth }

  return (
    <>
      <UserContext.Provider value={value}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="/goods" element={AdminAuthRequire} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </UserContext.Provider>
    </>


  );
}

export default App;

