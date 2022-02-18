import React, { useState } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import {
    Box,
    FormControl,
    Button,
    FormGroup,
    FormControlLabel,
    Checkbox,
    TextField,
  } from "@mui/material";

function TasksForm() {
    const [formData, setFormData] = useState({
        pool: false,
        pool_last_completed: '',
        gutters: false,
        gutters_last_completed: '',
        hvac: false,
        hvac_last_completed: '',
        chimney: false,
        chimney_last_completed: '',
        carpet: false,
        carpet_last_completed: '',
        trees: false,
        trees_last_completed: '',
        lawn: false,
        lawn_last_completed: '',
        landscape: false,
        landscape_last_completed: '',
        weeds: false,
        weeds_last_completed: '',
        pest_control: false,
        pest_control_last_completed: ''
    }) 

    {/* need to finish onChange handling */}
    function handleChange(e) {
        console.log(e)
    }

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
                {/* need to finish handleSubmit */}
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
                    {/* need to finish onChange handling */}
                    {formData.pool ? 
                    <KeyboardDatePicker
                        autoOk='true'
                        variant="inline"
                        inputVariant="outlined"
                        openTo="year"
                        format="MM/dd/yyyy"
                        label="Select date"
                        views={["year", "month", "date"]}
                        InputAdornmentProps={{ position: "start" }}
                        // value={formData.pool_last_completed}
                        // onChange={handleChange}
                     /> : null}

                    <FormControlLabel
                        control={<Checkbox />}
                        label="Gutters"
                        name="gutters"
                        checked={formData.gutters}
                        onChange={(e) => setFormData({...formData, [e.target.name]: e.target.checked})}
                        inputProps={{ "aria-label": "controlled" }}
                    />
                    {formData.gutters ? 
                    <KeyboardDatePicker
                        variant="inline"
                        inputVariant="outlined"
                        openTo="year"
                        format="MM/dd/yyyy"
                        label="Select date"
                        views={["year", "month", "date"]}
                        InputAdornmentProps={{ position: "start" }}
                        value={formData.gutters_last_completed}
                        onChange={handleChange}
                     /> : null}


                    <FormControlLabel
                        control={<Checkbox />}
                        label="Replac HVAC filter"
                        name="hvac"
                        checked={formData.hvac}
                        onChange={(e) => setFormData({...formData, [e.target.name]: e.target.checked})}
                        inputProps={{ "aria-label": "controlled" }}
                    />
                    {formData.hvac ? 
                    <KeyboardDatePicker
                        variant="inline"
                        inputVariant="outlined"
                        openTo="year"
                        format="MM/dd/yyyy"
                        label="Select date"
                        views={["year", "month", "date"]}
                        InputAdornmentProps={{ position: "start" }}
                        value={formData.hvac_last_completed}
                        onChange={handleChange}
                     /> : null}

                    <FormControlLabel
                        control={<Checkbox />}
                        label="Chimney"
                        name="chimney"
                        checked={formData.chimney}
                        onChange={(e) => setFormData({...formData, [e.target.name]: e.target.checked})}
                        inputProps={{ "aria-label": "controlled" }}
                    />
                    {formData.chimney ? 
                    <KeyboardDatePicker
                        variant="inline"
                        inputVariant="outlined"
                        openTo="year"
                        format="MM/dd/yyyy"
                        label="Select date"
                        views={["year", "month", "date"]}
                        InputAdornmentProps={{ position: "start" }}
                        value={formData.chimney_last_completed}
                        onChange={handleChange}
                     /> : null}

                    <FormControlLabel
                        control={<Checkbox />}
                        label="Carpet"
                        name="carpet"
                        checked={formData.carpet}
                        onChange={(e) => setFormData({...formData, [e.target.name]: e.target.checked})}
                        inputProps={{ "aria-label": "controlled" }}
                    />
                    {formData.carpet ? 
                    <KeyboardDatePicker
                        variant="inline"
                        inputVariant="outlined"
                        openTo="year"
                        format="MM/dd/yyyy"
                        label="Select date"
                        views={["year", "month", "date"]}
                        InputAdornmentProps={{ position: "start" }}
                        value={formData.carpet_last_completed}
                        onChange={handleChange}
                     /> : null}

                    <FormControlLabel
                        control={<Checkbox />}
                        label="Trees"
                        name="trees"
                        checked={formData.trees}
                        onChange={(e) => setFormData({...formData, [e.target.name]: e.target.checked})}
                        inputProps={{ "aria-label": "controlled" }}
                    />
                    {formData.trees ? 
                    <KeyboardDatePicker
                        variant="inline"
                        inputVariant="outlined"
                        openTo="year"
                        format="MM/dd/yyyy"
                        label="Select date"
                        views={["year", "month", "date"]}
                        InputAdornmentProps={{ position: "start" }}
                        value={formData.trees_last_completed}
                        onChange={handleChange}
                     /> : null}

                    <FormControlLabel
                        control={<Checkbox />}
                        label="Lawn"
                        name="lawn"
                        checked={formData.lawn}
                        onChange={(e) => setFormData({...formData, [e.target.name]: e.target.checked})}
                        inputProps={{ "aria-label": "controlled" }}
                    />
                    {formData.lawn ? 
                    <KeyboardDatePicker
                        variant="inline"
                        inputVariant="outlined"
                        openTo="year"
                        format="MM/dd/yyyy"
                        label="Select date"
                        views={["year", "month", "date"]}
                        InputAdornmentProps={{ position: "start" }}
                        value={formData.lawn_last_completed}
                        onChange={handleChange}
                     /> : null}

                    <FormControlLabel
                        control={<Checkbox />}
                        label="Landscape"
                        name="landscape"
                        checked={formData.landscape}
                        onChange={(e) => setFormData({...formData, [e.target.name]: e.target.checked})}
                        inputProps={{ "aria-label": "controlled" }}
                    />
                    {formData.landscape ? 
                    <KeyboardDatePicker
                        variant="inline"
                        inputVariant="outlined"
                        openTo="year"
                        format="MM/dd/yyyy"
                        label="Select date"
                        views={["year", "month", "date"]}
                        InputAdornmentProps={{ position: "start" }}
                        value={formData.landscape_last_completed}
                        onChange={handleChange}
                     /> : null}

                    <FormControlLabel
                        control={<Checkbox />}
                        label="Weeds"
                        name="weeds"
                        checked={formData.weeds}
                        onChange={(e) => setFormData({...formData, [e.target.name]: e.target.checked})}
                        inputProps={{ "aria-label": "controlled" }}
                    />
                    {formData.weeds ? 
                    <KeyboardDatePicker
                        variant="inline"
                        inputVariant="outlined"
                        openTo="year"
                        format="MM/dd/yyyy"
                        label="Select date"
                        views={["year", "month", "date"]}
                        InputAdornmentProps={{ position: "start" }}
                        value={formData.weeds_last_completed}
                        onChange={handleChange}
                     /> : null}

                    <FormControlLabel
                        control={<Checkbox />}
                        label="Pest Control"
                        name="pest_control"
                        checked={formData.pest_control}
                        onChange={(e) => setFormData({...formData, [e.target.name]: e.target.checked})}
                        inputProps={{ "aria-label": "controlled" }}
                    />
                    {formData.pest_control ? 
                    <KeyboardDatePicker
                        variant="inline"
                        inputVariant="outlined"
                        openTo="year"
                        format="MM/dd/yyyy"
                        label="Select date"
                        views={["year", "month", "date"]}
                        InputAdornmentProps={{ position: "start" }}
                        value={formData.pest_control_last_completed}
                        onChange={handleChange}
                     /> : null}

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