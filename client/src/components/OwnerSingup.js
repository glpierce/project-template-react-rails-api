import React from 'react'
import { useState } from 'react'
import { FormControl, TextField, Button } from '@mui/material';
import Box from '@mui/material/Box';
import { useHistory } from "react-router-dom"


function OwnerSignup({setUser}) {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
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
    fetch("/owners", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
    })
    .then((r) => {
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
                  id="first-name"
                  label="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
        <TextField
                  required
                  id="last-name"
                  label="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
        <TextField
                  required
                  id="owner-email"
                  label="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
        <TextField
                  required
                  id="owner-password"
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
        <TextField
                  required
                  id="owner-confirm"
                  label="Confirm Password"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                <br />
        <Button variant="outlined" onClick={handleSubmit}>Sign Up!</Button>
        </FormControl>
        </Box>
    </div>
  )
}

export default OwnerSignup