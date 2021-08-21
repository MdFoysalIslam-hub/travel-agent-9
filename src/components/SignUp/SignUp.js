import React from "react";

import { Link } from "react-router-dom";
import FromControlLabel from "@material-ui/core/FormControlLabel";

import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { Button, Checkbox, Divider, TextField } from "@material-ui/core";

const SignUp = () => {
  return (
    <div>
      <div className="icon">
        <div className="icon_class">
          <PersonAddIcon fontSize="large" />
        </div>
        <div className="text"> Sign Up</div>
      </div>
      <div className="row m-2">
        <div className="col-6 p-2">
          <TextField
            id="firstname"
            type="text"
            variant="outlined"
            label="Enter First Name"
            fullWidth
          />
        </div>
        <div className="col-6 p-2">
          <TextField
            id="lastname"
            type="text"
            variant="outlined"
            label="Enter Last Name"
            fullWidth
          />
        </div>
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
          type="password"
          variant="outlined"
          label="Enter Password"
          fullWidth
        />
        <FromControlLabel
          control={
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
              checkedIcon={<CheckBoxIcon fontSize="small" />}
            />
          }
          label="I agree to all terms and conditions."
        />
        <Button variant="contained" color="primary" fullWidth>
          Create Account
        </Button>
      </div>
      <Divider variant="middle" />
      <p className="text-center">
        <Link to="/login" className="text-blank-50">
          <h4>Already have an Account ?</h4>
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
