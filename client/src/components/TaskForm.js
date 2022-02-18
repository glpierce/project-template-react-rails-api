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

    function handleChange(e, name) {
        console.log(e)
        const value = e.target.type !== 'checkbox' || null ? e : e.target.checked;
        console.log("VALUE: ", value)
        setFormData({...formData, [name]: value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log('Submitted')
    }

    console.log('FormData: ', formData)
    

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
                        checked={formData.pool}
                        onChange={(e) => handleChange(e,'pool')}
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
                        label="Select when this task was last completed"
                        views={["year", "month", "date"]}
                        InputAdornmentProps={{ position: "start" }}
                        value={formData.pool_last_completed}
                        onChange={(e) => handleChange(e, 'pool_last_completed')}
                     /> : null}

                    <FormControlLabel
                        control={<Checkbox />}
                        label="Gutters"
                        checked={formData.gutters}
                        onChange={(e) => handleChange(e, 'gutters')}
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
                        onChange={(e) => handleChange(e, 'gutters_last_completed')}
                     /> : null}


                    <FormControlLabel
                        control={<Checkbox />}
                        label="Replac HVAC filter"
                        name="hvac"
                        checked={formData.hvac}
                        onChange={(e) => handleChange(e, 'hvac')}
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
                        onChange={(e) => handleChange(e, 'hvac_last_completed')}
                     /> : null}

                    <FormControlLabel
                        control={<Checkbox />}
                        label="Chimney"
                        name="chimney"
                        checked={formData.chimney}
                        onChange={(e) => handleChange(e, 'chimney')}
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
                        onChange={(e) => handleChange(e, 'chimney_last_completed')}
                     /> : null}

                    <FormControlLabel
                        control={<Checkbox />}
                        label="Carpet"
                        name="carpet"
                        checked={formData.carpet}
                        onChange={(e) => handleChange(e, 'carpet')}
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
                        onChange={(e) => handleChange(e, 'carpet_last_completed')}
                     /> : null}

                    <FormControlLabel
                        control={<Checkbox />}
                        label="Trees"
                        name="trees"
                        checked={formData.trees}
                        onChange={(e) => handleChange(e, 'trees')}
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
                        onChange={(e) => handleChange(e, 'trees_last_completed')}
                     /> : null}

                    <FormControlLabel
                        control={<Checkbox />}
                        label="Lawn"
                        name="lawn"
                        checked={formData.lawn}
                        onChange={(e) => handleChange(e, 'lawn')}
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
                        onChange={(e) => handleChange(e, 'lawn_last_completed')}
                     /> : null}

                    <FormControlLabel
                        control={<Checkbox />}
                        label="Landscape"
                        name="landscape"
                        checked={formData.landscape}
                        onChange={(e) => handleChange(e, 'landscape')}
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
                        onChange={(e) => handleChange(e, 'landscape_last_completed')}
                     /> : null}

                    <FormControlLabel
                        control={<Checkbox />}
                        label="Weeds"
                        name="weeds"
                        checked={formData.weeds}
                        onChange={(e) => handleChange(e, 'weeds')}
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
                        onChange={(e) => handleChange(e, 'weeds_last_completed')}
                     /> : null}

                    <FormControlLabel
                        control={<Checkbox />}
                        label="Pest Control"
                        name="pest_control"
                        checked={formData.pest_control}
                        onChange={(e) => handleChange(e, 'pest_control')}
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
                        onChange={(e) => handleChange(e, 'pest_control_last_completed')}
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