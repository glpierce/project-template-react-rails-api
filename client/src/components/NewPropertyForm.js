import React, { useState } from "react";
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
  const history = useHistory();

  console.log(user.id)
  

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/properties", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        address: address,
        city: city,
        owner_occupied: ownerOccupied,
        owner_id: user.id,
      }),
    }).then((r) => r.json())
    history.push("/owner")
  }

  return (
    <div>
      NewPropertyForm
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
