import React, { useState } from "react";
import {
    Box,
    FormControl,
    Button,
    FormGroup,
    FormControlLabel,
    Checkbox,
    TextField,
  } from "@mui/material";
//   import { DatePicker, LocalizationProvider, AdapterDateFns } from '@mui/lab';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function TasksForm() {
    const [formData, setFormData] = useState({
        pool: false,
        pool_last_completed: new Date(),
        gutters: false,
        gutters_last_completed: new Date(),
        hvac: false,
        hvac_last_completed: new Date(),
        chimney: false,
        chimney_last_completed: new Date(),
        carpet: false,
        carpet_last_completed: new Date(),
        trees: false,
        trees_last_completed: new Date(),
        lawn: false,
        lawn_last_completed: new Date(),
        landscape: false,
        landscape_last_completed: new Date(),
        weeds: false,
        weeds_last_completed: new Date(),
        pest_control: false,
        pest_control_last_completed: new Date()
    }) 

    function handleSubmit(e) {
        e.preventDefault()
        console.log('Submitted')
    }

    console.log(formData)
    

    return(
        <div>
            <Box
                component="form"
                sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
            >
                <FormControl>
                <FormGroup>
                    Which of the following apply to this property?
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Pool"
                        name="pool"
                        checked={formData.pool}
                        onChange={(e) => setFormData({...formData, [e.target.name]: e.target.checked})}
                        inputProps={{ "aria-label": "controlled" }}
                    />
                    {formData.pool ? 
                    <DatePicker
                        value={formData.pool_last_completed}
                        selected={formData.pool_last_completed}
                        name='pool_last_completed'
                        onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}
                    /> : null}

                    <FormControlLabel
                        control={<Checkbox />}
                        label="Gutters"
                        name="gutters"
                        checked={formData.gutters}
                        onChange={(e) => setFormData({...formData, [e.target.name]: e.target.checked})}
                        inputProps={{ "aria-label": "controlled" }}
                    />
                    <FormControlLabel
                        control={<Checkbox />}
                        label="HVAC"
                        name="hvac"
                        checked={formData.hvac}
                        onChange={(e) => setFormData({...formData, [e.target.name]: e.target.checked})}
                        inputProps={{ "aria-label": "controlled" }}
                    />
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Chimney"
                        name="chimney"
                        checked={formData.chimney}
                        onChange={(e) => setFormData({...formData, [e.target.name]: e.target.checked})}
                        inputProps={{ "aria-label": "controlled" }}
                    />
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Carpet"
                        name="carpet"
                        checked={formData.carpet}
                        onChange={(e) => setFormData({...formData, [e.target.name]: e.target.checked})}
                        inputProps={{ "aria-label": "controlled" }}
                    />
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Trees"
                        name="trees"
                        checked={formData.trees}
                        onChange={(e) => setFormData({...formData, [e.target.name]: e.target.checked})}
                        inputProps={{ "aria-label": "controlled" }}
                    />
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Lawn"
                        name="lawn"
                        checked={formData.lawn}
                        onChange={(e) => setFormData({...formData, [e.target.name]: e.target.checked})}
                        inputProps={{ "aria-label": "controlled" }}
                    />
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Landscape"
                        name="landscape"
                        checked={formData.landscape}
                        onChange={(e) => setFormData({...formData, [e.target.name]: e.target.checked})}
                        inputProps={{ "aria-label": "controlled" }}
                    />
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Weeds"
                        name="weeds"
                        checked={formData.weeds}
                        onChange={(e) => setFormData({...formData, [e.target.name]: e.target.checked})}
                        inputProps={{ "aria-label": "controlled" }}
                    />
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Pest Control"
                        name="pest_control"
                        checked={formData.pest_control}
                        onChange={(e) => setFormData({...formData, [e.target.name]: e.target.checked})}
                        inputProps={{ "aria-label": "controlled" }}
                    />
                </FormGroup>
                <br />
                <Button variant="outlined" onClick={handleSubmit}>
                    Confirm Features
                </Button>
                </FormControl>
            </Box>
        </div>
    )
}

export default TasksForm;