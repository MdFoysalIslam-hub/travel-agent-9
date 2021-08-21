import React, { useContext } from "react";
import "../../App.css";
import { TextField, Button, Divider } from "@material-ui/core";
import { Link } from "react-router-dom";
import FromControlLabel from "@material-ui/core/FormControlLabel";
import { Checkbox } from "@material-ui/core";
import CheckBoxOutlineBlank from "@material-ui/icons/CheckBoxOutlineBlank";

import CheckBoxIcon from "@material-ui/icons/CheckBox";
import PersonIcon from "@material-ui/icons/Person";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from "./firebase.config";
import { UserContext } from "./../../App";
import { useHistory, useLocation } from "react-router-dom";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <div className="icon">
        <div className="icon_class">
          <PersonIcon fontSize="large" />
        </div>
        <div className="text">log in</div>
      </div>

      <div className="row m-2">
        <TextField
          id="email"
          className="p-2"
          type="text"
          variant="outlined"
          label="Enter Email"
         
  
					
          fullWidth
        />
        <TextField
          id="Password"
          className="p-2"
          type="Password"
          variant="outlined"
          label="Enter Password"
        
					
          fullWidth
        />
        <FromControlLabel
          control={
            <Checkbox
              icon={<CheckBoxOutlineBlank fontSize="small" />}
              checkedIcon={<CheckBoxIcon fontSize="small" />}
              name="checkedI"
            />
          }
          label="Remember me"
        />
        <Button
          onClick={handleSignIn}
          variant="contained"
          color="primary"
          fullWidth
        >
          {" "}
          Log in{" "}
        </Button>
      </div>
      <Divider variant="middle" />
      <h4 className="text-center">
        <Link to="/signup" className="text-black-50">
          Create Account
        </Link>
      </h4>
    </div>
  );
};

export default Login;
