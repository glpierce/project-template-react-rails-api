import React, { useState } from "react";
import TasksForm from "./TaskForm";
import {
  FormControl,
  TextField,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import Box from "@mui/material/Box";
import { useHistory } from "react-router-dom";

function NewPropertyForm({user}) {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [ownerOccupied, setOwnerOccupied] = useState(false);
  const [formToggle, setFormToggle] = useState(false)
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    const newProperty = {
      address: address,
      city: city,
      owner_occupied: ownerOccupied,
      owner_id: user.id
    }

    fetch("/properties", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProperty),
    }).then((r) => {
      if (r.ok) {
          r.json().then((newProperty) => {
            history.push("/owner")
          });
      } else {
          r.json().then((err) => console.log(err.errors)); //finish error handling
      }
      setFormToggle(!formToggle)
    });
    resetFormData()
    // if r.ok is true, set a state propertyForm - booloean, initialize to true, if true render property, otherwise task form.  
    // Switch state to false and render form for the tasks, persist tasks, then route to history.push(/owner)
  }

  function resetFormData(){
    setAddress("")
    setCity("")
    setOwnerOccupied(false)
  }

  return (
    <div>
      <br/>
      <br/>
      <br />
      Add another property
      <br />
      <br />
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
      >
        <FormControl>
          <TextField
            required
            id="property-address"
            label="Property Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <TextField
            required
            id="property-city"
            label="Property City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Do You Live Here?"
              checked={ownerOccupied}
              onChange={() => setOwnerOccupied(!ownerOccupied)}
              inputProps={{ "aria-label": "controlled" }}
            />
          </FormGroup>
          <br />
          <Button variant="outlined" onClick={handleSubmit}>
            Add Property
          </Button>
        </FormControl>
      </Box>
    </div>
  );
}

export default NewPropertyForm;
