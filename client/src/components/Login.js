import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

const ariaLabel = { 'aria-label': 'description' };

function Login({ user, setUser }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    function loginSuccess(userResp) {
        console.log(userResp)
        setUser(userResp)
        history.push(userResp.account_type == "owner" ? "/owner" : "/provider")
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("login submitted")
        setIsLoading(true);
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email, password: password }),
        })
        .then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((userResp) => loginSuccess(userResp));
            } else {
                r.json().then((err) => console.log(err.errors));
            }
        });
    }

    function printErrors() {
        if (!!errors.length) {
            const errorElements = errors.map((err) => (<p key={err}>{err}</p>))
            return(errorElements)
        } else {
            return(<></>)
        }
    }

    return (
        <div>
            <form>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Input 
                        inputProps={ariaLabel} 
                        placeholder="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Input 
                        inputProps={ariaLabel} 
                        placeholder="password" 
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Button 
                        variant="outlined" 
                        color="primary" 
                        type="submit"
                        onClick={(e) => handleSubmit(e)}
                    >
                        {isLoading ? "Loading..." : "Login"}
                    </Button>
                    <div>
                        {printErrors()}
                    </div>
                </Box>
            </form>
        </div>
    )
}

export default Login;