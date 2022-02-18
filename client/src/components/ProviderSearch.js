import React, { useState, useEffect, useRef } from 'react'
import { useParams, useHistory } from "react-router-dom"
import { FormControl, TextField, Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { KeyboardDatePicker } from "@material-ui/pickers";


function ProviderSearch() {
    const { id, taskId } = useParams()
    const [task, setTask] = useState({})
    const [providers, setProviders] = useState([])
    const initialLoad = useRef(true);


    useEffect(() => {
      fetch(`/tasks/${taskId}`)
      .then((r) => r.json())
      .then((data) => {
        setTask(data)
        initialLoad.current = false
      })
    }, [])            

    useEffect(() => {
      if (!initialLoad.current) {
        fetch(`/provider_services/${task.service_category_id}`)
        .then(res => res.json())
        .then(p => {
          console.log(p)
          setProviders(p)
        })
      }
    }, [task])

    function bookService(provider) {
      const postObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({provider_id: provider.provider.id, task_id: task.id, price: provider.price})
      }
    }

    function renderProvidersTable() {
        if (!!providers.length) {
          const providersRows = providers.map((provider) => (
            <TableRow
              key={provider.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {provider.id}
              </TableCell>
              <TableCell align="left">{provider.provider.name}</TableCell>
              <TableCell align="left">{provider.provider.location}</TableCell>
              <TableCell align="left">{`$${provider.price}`}</TableCell>
              <TableCell align="left">
                <FormControl>
                <KeyboardDatePicker
                  disablePast
                  variant="inline"
                  inputVariant="outlined"
                  openTo="year"
                  format="MM/dd/yyyy"
                  label="Select date"
                  views={["year", "month", "date"]}
                  InputAdornmentProps={{ position: "start" }}
                  // value={selectedDate}
                  // onChange={handleDateChange}
                />
                  <Button
                    variant="outlined" 
                    value='pro'
                    onClick={(e) => bookService(provider)}
                  >
                    book
                  </Button>
                </FormControl>
              </TableCell>
            </TableRow>
          ))
          return(providersRows)
        } else {
          return(<p>No providers yet...</p>)
        }
      }
      
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>provider</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Location</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Book Services</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!!providers.length ? renderProvidersTable() : <p>Providers loading...</p>}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

export default ProviderSearch