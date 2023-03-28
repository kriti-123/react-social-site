import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Fragment } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks";
import { Home } from "../pages";
import Loader from "./Loader";
import Navbar from "./Navbar";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Settings from "../pages/Setting";
import UserProfile from "../pages/UserProfile";

const Error404 = () => {
  return <h1>404 ERROR</h1>;
};
// const PrivateRoute = () => {
//   const auth = useAuth().user; 
//   return auth ? <Outlet /> : <Navigate to="/login" />;
// };
function PrivateRoute({children}){

  const auth = useAuth();

  if(auth.user){
    return children;
  }
  return <Navigate to="/login" />
}

function App() {
  const auth = useAuth();
  if (auth.loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/user-settings" element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>}>
            </Route>

            <Route exact path="/user/:userId" element={
              <PrivateRoute>
                <UserProfile />
              </PrivateRoute>}>
            </Route>

          {/* -----------------------making private route-----------------  */}
          {/* <Route exact path="/settings" element={<PrivateRoute />}>
            <Route exact path="/settings" element={<Settings />} />
          </Route>
          <Route exact path="/user/:id" element={<PrivateRoute />}>
            <Route exact path="/user/:id" element={<UserProfile />} />
          </Route> */}
          {/* ------------------------------------------------------------- */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
