import React from "react";
import map from "../../images/Map.png";
import "./Destination.css";
import { Button, TextField } from "@material-ui/core";

const Destination = () => {
  return (
    <div>
      <div className="adress">
        <h3>this is destination</h3>
        <div>
          <TextField id="filled-basic" label="From" variant="filled" />
          <TextField id="outlined-basic" label="To" variant="outlined" />
        </div>

        <div className="calender">
          <label for="start">Start date:</label>

          <input
            type="date"
            id="start"
            name="trip-start"
            value="2021-08-21"
            min="2018-01-01"
            max="2028-12-31"
          />
        </div>
        <br />
        <br />

        

        <div>
          <TextField id="filled-basic" label="Your time" variant="filled" />
          <TextField
            id="outlined-basic"
            label="your phone number"
            variant="outlined"
          />
        </div><br/><br/>
        <Button variant="contained" color="primary">Confirm Ticket</Button>
       
      </div>
      
      <img src={map} alt=""></img>
    </div>
  );
};

export default Destination;
