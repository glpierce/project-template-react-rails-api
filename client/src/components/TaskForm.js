import React, { useState } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { useHistory } from "react-router-dom"
import {
    Box,
    FormControl,
    Button,
    FormGroup,
    FormControlLabel,
    Checkbox,
    TextField,
  } from "@mui/material";

function TasksForm({ user }) {
    const [formData, setFormData] = useState({
        pool: {
            has: false,
            frequency: 7,
            last_completed: null
        },
        gutters: {
            has: false,
            frequency: 60,
            last_completed: null
        },
        hvac: {
            has: false,
            frequency: 180,
            last_completed: null
        },
        chimney:{
            has: false,
            frequency: 120,
            last_completed: null
        },
        carpet: {
            has: false,
            frequency: 180,
            last_completed: null
        },
        trees: {
            has: false,
            frequency: 60,
            last_completed: null
        },
        lawn: {
            has: false,
            frequency: 21,
            last_completed: null
        },
        landscape: {
            has: false,
            frequency: 45,
            last_completed: null
        },
        weeds: {
            has: false,
            frequency: 30,
            last_completed: null
        },
        pest_control: {
            has: false,
            frequency: 365,
            last_completed: null
        }
    }) 

    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault()
        let newTasks = [{...formData,}]
        
        let keysArr = newTasks.filter((d) => {
            for(const key in d) {
                console.log("d[key]:", d[key])
                if (d[key].has) {
                    console.log("d[key]:", d[key])
                    // fetch('/tasks', {
                    //     method: 'POST',
                    //     headers: {
                    //         "Content-Type": "application/json",
                    //     },
                    //     body: JSON.stringify({
                    //         task_name: key,
                    //         frequency: d[key].frequency,
                    //         last_completed: d[key].last_completed
                    //     })
                    //     .then((r) => {
                    //         if (r.ok) {
                    //             resetFormData();
                    //             history.push('/owner');
                    //         } else {
                    //             r.json().then((err) => console.log(err))
                    //         }
                    //     })
                    // })
                }
            }
            resetFormData();
        })
    }


    const handleChecked = (e) => setFormData({...formData, [e.target.name]: {...formData[e.target.name], ['has']: e.target.checked}})

    function resetFormData() {
        setFormData({
            pool: {
                has: false,
                frequency: 7,
                last_completed: null
            },
            gutters: {
                has: false,
                frequency: 60,
                last_completed: null
            },
            hvac: {
                has: false,
                frequency: 180,
                last_completed: null
            },
            chimney:{
                has: false,
                frequency: 120,
                last_completed: null
            },
            carpet: {
                has: false,
                frequency: 180,
                last_completed: null
            },
            trees: {
                has: false,
                frequency: 60,
                last_completed: null
            },
            lawn: {
                has: false,
                frequency: 21,
                last_completed: null
            },
            landscape: {
                has: false,
                frequency: 45,
                last_completed: null
            },
            weeds: {
                has: false,
                frequency: 30,
                last_completed: null
            },
            pest_control: {
                has: false,
                frequency: 365,
                last_completed: null
            }
        })
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
                        checked={formData['pool'].has}
                        onChange={handleChecked}
                        inputProps={{ "aria-label": "controlled" }}
                    />
                    
                    {formData.pool.has ? 
                    <KeyboardDatePicker
                        autoOk='true'
                        variant="inline"
                        inputVariant="outlined"
                        openTo="year"
                        format="MM/dd/yyyy"
                        disableFuture
                        label="Select when this task was last completed"
                        views={["year", "month", "date"]}
                        InputAdornmentProps={{ position: "start" }}
                        name='pool'
                        value={formData.pool.last_completed}
                        onChange={(e) => setFormData({...formData, ['pool']: {...formData['pool'], ['last_completed']: e}})}
                     /> : null}

                    <FormControlLabel
                        control={<Checkbox />}
                        label="Gutters"
                        name="gutters"
                        checked={formData.gutters.has}
                        onChange={handleChecked}
                        inputProps={{ "aria-label": "controlled" }}
                    />
                    {formData.gutters.has ? 
                    <KeyboardDatePicker
                        autoOk='true'
                        variant="inline"
                        inputVariant="outlined"
                        openTo="year"
                        disableFuture
                        format="MM/dd/yyyy"
                        label="Select date"
                        views={["year", "month", "date"]}
                        InputAdornmentProps={{ position: "start" }}
                        value={formData.gutters.last_completed}
                        onChange={(e) => setFormData({...formData, ['gutters']: {...formData['gutters'], ['last_completed']: e}})}
                     /> : null}


                    <FormControlLabel
                        control={<Checkbox />}
                        label="Replace HVAC filter"
                        name="hvac"
                        checked={formData.hvac.has}
                        onChange={handleChecked}
                        inputProps={{ "aria-label": "controlled" }}
                    />
                    {formData.hvac.has ? 
                    <KeyboardDatePicker
                        autoOk='true'
                        variant="inline"
                        inputVariant="outlined"
                        openTo="year"
                        format="MM/dd/yyyy"
                        label="Select date"
                        disableFuture
                        views={["year", "month", "date"]}
                        InputAdornmentProps={{ position: "start" }}
                        value={formData.hvac.last_completed}
                        onChange={(e) => setFormData({...formData, ['hvac']: {...formData['hvac'], ['last_completed']: e}})}
                     /> : null}

                    <FormControlLabel
                        control={<Checkbox />}
                        label="Chimney"
                        name="chimney"
                        checked={formData.chimney.has}
                        onChange={handleChecked}
                        inputProps={{ "aria-label": "controlled" }}
                    />
                    {formData.chimney.has ? 
                    <KeyboardDatePicker
                        autoOk='true'
                        variant="inline"
                        inputVariant="outlined"
                        openTo="year"
                        format="MM/dd/yyyy"
                        disableFuture
                        label="Select date"
                        views={["year", "month", "date"]}
                        InputAdornmentProps={{ position: "start" }}
                        value={formData.chimney.last_completed}
                        onChange={(e) => setFormData({...formData, ['chimney']: {...formData['chimney'], ['last_completed']: e}})}
                     /> : null}

                    <FormControlLabel
                        control={<Checkbox />}
                        label="Carpet"
                        name="carpet"
                        checked={formData.carpet.has}
                        onChange={handleChecked}
                        inputProps={{ "aria-label": "controlled" }}
                    />
                    {formData.carpet.has ? 
                    <KeyboardDatePicker
                        autoOk='true'
                        variant="inline"
                        inputVariant="outlined"
                        openTo="year"
                        format="MM/dd/yyyy"
                        disableFuture
                        label="Select date"
                        views={["year", "month", "date"]}
                        InputAdornmentProps={{ position: "start" }}
                        value={formData.carpet.last_completed}
                        onChange={(e) => setFormData({...formData, ['carpet']: {...formData['carpet'], ['last_completed']: e}})}
                     /> : null}

                    <FormControlLabel
                        control={<Checkbox />}
                        label="Trees"
                        name="trees"
                        checked={formData.trees.has}
                        onChange={handleChecked}
                        inputProps={{ "aria-label": "controlled" }}
                    />
                    {formData.trees.has ? 
                    <KeyboardDatePicker
                        autoOk='true'
                        variant="inline"
                        inputVariant="outlined"
                        openTo="year"
                        format="MM/dd/yyyy"
                        disableFuture
                        label="Select date"
                        views={["year", "month", "date"]}
                        InputAdornmentProps={{ position: "start" }}
                        value={formData.trees.last_completed}
                        onChange={(e) => setFormData({...formData, ['trees']: {...formData['trees'], ['last_completed']: e}})}
                     /> : null}

                    <FormControlLabel
                        control={<Checkbox />}
                        label="Lawn"
                        name="lawn"
                        checked={formData.lawn.has}
                        onChange={handleChecked}
                        inputProps={{ "aria-label": "controlled" }}
                    />
                    {formData.lawn.has ? 
                    <KeyboardDatePicker
                        autoOk='true'
                        variant="inline"
                        inputVariant="outlined"
                        openTo="year"
                        format="MM/dd/yyyy"
                        label="Select date"
                        disableFuture
                        views={["year", "month", "date"]}
                        InputAdornmentProps={{ position: "start" }}
                        value={formData.lawn.last_completed}
                        onChange={(e) => setFormData({...formData, ['lawn']: {...formData['lawn'], ['last_completed']: e}})}
                     /> : null}

                    <FormControlLabel
                        control={<Checkbox />}
                        label="Landscape"
                        name="landscape"
                        checked={formData.landscape.has}
                        onChange={handleChecked}
                        inputProps={{ "aria-label": "controlled" }}
                    />
                    {formData.landscape.has ? 
                    <KeyboardDatePicker
                        autoOk='true'
                        variant="inline"
                        inputVariant="outlined"
                        openTo="year"
                        format="MM/dd/yyyy"
                        disableFuture
                        label="Select date"
                        views={["year", "month", "date"]}
                        InputAdornmentProps={{ position: "start" }}
                        value={formData.landscape.last_completed}
                        onChange={(e) => setFormData({...formData, ['landscape']: {...formData['landscape'], ['last_completed']: e}})}
                     /> : null}

                    <FormControlLabel
                        control={<Checkbox />}
                        label="Weeds"
                        name="weeds"
                        checked={formData.weeds.has}
                        onChange={handleChecked}
                        inputProps={{ "aria-label": "controlled" }}
                    />
                    {formData.weeds.has ? 
                    <KeyboardDatePicker
                        autoOk='true'
                        variant="inline"
                        inputVariant="outlined"
                        openTo="year"
                        format="MM/dd/yyyy"
                        label="Select date"
                        views={["year", "month", "date"]}
                        disableFuture
                        InputAdornmentProps={{ position: "start" }}
                        value={formData.weeds.last_completed}
                        onChange={(e) => setFormData({...formData, ['weeds']: {...formData['weeds'], ['last_completed']: e}})}
                     /> : null}

                    <FormControlLabel
                        control={<Checkbox />}
                        label="Pest Control"
                        name="pest_control"
                        checked={formData.pest_control.has}
                        onChange={handleChecked}
                        inputProps={{ "aria-label": "controlled" }}
                    />
                    {formData.pest_control.has ? 
                    <KeyboardDatePicker
                        autoOk='true'
                        variant="inline"
                        inputVariant="outlined"
                        openTo="year"
                        format="MM/dd/yyyy"
                        label="Select date"
                        disableFuture
                        views={["year", "month", "date"]}
                        InputAdornmentProps={{ position: "start" }}
                        value={formData.pest_control.last_completed}
                        onChange={(e) => setFormData({...formData, ['pest_control']: {...formData['pest_control'], ['last_completed']: e}})}
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