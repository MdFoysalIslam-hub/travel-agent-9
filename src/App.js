import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Header/Home/Home";
import Header from "./components/Header/Header";
import Destination from "./components/Header/Destination/Destination";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";

import { createContext, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>Name: {loggedInUser.name}</p>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/destination">
            <Destination />
          </PrivateRoute>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="*">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
