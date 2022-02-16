import React, { useState } from "react";
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

const ariaLabel = { 'aria-label': 'description' };

function Login({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user) => onLogin(user));
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                    >
                        {isLoading ? "Loading..." : "Login"}
                    </Button>
                    <div>
                        {errors.map((err) => (
                            <p key={err}>{err}</p>
                        ))}
                    </div>
                </Box>
            </form>
        </div>
    )
}

export default Login;