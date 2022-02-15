import React from 'react'
import { useState, useEffect } from 'react'
import { FormControl, InputLabel, Input, FormHelperText, TextField, Button } from '@mui/material';
import Box from '@mui/material/Box';


function ProviderSignup({setUser}) {
  const [providerName, setProviderName] = useState("")
  const [location, setLocation] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/providers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: providerName,
        email,
        location,
        password,
        password_confirmation: passwordConfirmation,
      }),
    })
      .then((r) => r.json())
  }
  return (
    <div>
      <Box
       component="form"
       sx={{
         '& .MuiTextField-root': { m: 1, width: '25ch' },
       }}
    >
<FormControl>
<TextField
          required
          id="provder-name"
          label="Provider Name"
          value={providerName}
          onChange={(e) => setProviderName(e.target.value)}
        />
<TextField
          required
          id="provider-email"
          label="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
<TextField
          required
          id="provider-location"
          label="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
<TextField
          required
          id="provider-password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
<TextField
          required
          id="provider-confirm"
          label="Confirm Password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <Button variant="outlined" onClick={handleSubmit} >Sign Up!</Button>
</FormControl>
</Box>
    </div>
  )
}

export default ProviderSignup;