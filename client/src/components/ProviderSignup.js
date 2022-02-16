import React from 'react'
import { useState } from 'react'
import { FormControl, TextField, Button } from '@mui/material';
import Box from '@mui/material/Box';
import { useHistory } from "react-router-dom"

function ProviderSignup({setUser}) {
  const [providerName, setProviderName] = useState("")
  const [location, setLocation] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const history = useHistory();

  function loginSuccess(userResp) {
    console.log(userResp)
    setUser(userResp)
    history.push(userResp.account_type == "owner" ? "/owner" : "/provider")
}

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
    }).then((r) => {
      // setIsLoading(false);
      if (r.ok) {
          r.json().then((userResp) => loginSuccess(userResp));
      } else {
          r.json().then((err) => console.log(err.errors));
      }
  });
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
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
<TextField
          required
          id="provider-confirm"
          label="Confirm Password"
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <br />
        <Button variant="outlined" onClick={handleSubmit} >Sign Up!</Button>
</FormControl>
</Box>
    </div>
  )
}

export default ProviderSignup;