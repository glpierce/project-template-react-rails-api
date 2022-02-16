import React from 'react'
import { useState, useEffect } from 'react'
import { FormControl, InputLabel, Input, FormHelperText, TextField, Button } from '@mui/material';
import Box from '@mui/material/Box';

function OwnerSignup({setUser}) {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

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
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }
  return (
    <div>
      {/* <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input 
      type="email" 
      class="form-control" 
      id="exampleInputEmail1" 
      aria-describedby="emailHelp" 
      placeholder="Enter email"
      value={email}    
      onChange={(e) => setEmail(e.target.value)}
    />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label 
      for="exampleInputPassword1">
        Password
    </label>
    <input 
      type="password" 
      class="form-control" 
      id="exampleInputPassword1" 
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <input 
      type="password" 
      class="form-control" 
      id="exampleInputPassword1" 
      placeholder="Confirm Password"
      value={passwordConfirmation}
      onChange={(e) => setPasswordConfirmation(e.target.value)}
    />
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form> */}
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