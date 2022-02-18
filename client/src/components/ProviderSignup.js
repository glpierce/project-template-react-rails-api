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
  const [passwordMatch, setPasswordMatch] = useState(true)
  const [emailInUse, setEmailInUse] = useState(false)
  const history = useHistory();


  function handleSubmit(e) {
    e.preventDefault();
    checkEmail()
  }

  function checkEmail() {
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email: email})
    }
    fetch("/email", payload)
    .then((r) => {
      if (r.ok) {
        setEmailInUse(false)
        createAccount()
      } else {
        setEmailInUse(true)
        resetPasswordFields()
      }
    })
  }

  function createAccount() {
    if (password === passwordConfirmation) {
      const payload = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: providerName,
          email: email,
          location: location,
          password: password
        }),
      }
      fetch("/providers", payload)
      .then((r) => {
        if (r.ok) {
            r.json().then((userResp) => {
              setUser(userResp)
              history.push("/provider")
            });
        } else {
            r.json().then((err) => console.log(err.errors)); //finish error handling
        }
      });
    } else {
      resetPasswordFields()
      setPasswordMatch(false)
    }
  }

  function resetPasswordFields() {
    setPassword("")
    setPasswordConfirmation("")
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
          {emailInUse ? <p>There is already an account associated with this email</p> : <></>}
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
          {passwordMatch ? <></> : <p>Passwords must match</p>}
          <br />
          <Button variant="outlined" onClick={handleSubmit} >Sign Up!</Button>
        </FormControl>
      </Box>
    </div>
  )
}

export default ProviderSignup;