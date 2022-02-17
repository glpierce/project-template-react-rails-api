import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


function ProviderSearch() {
    const [providers, setProviders] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    console.log(providers)



    useEffect(() => {
        fetch("/providers")
        .then(res => res.json())
        .then(p => {
            setProviders(p)
        setIsLoaded(true)
        })
    }, [])
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
              <TableCell align="left">{provider.name}</TableCell>
              <TableCell align="left">{provider.location}</TableCell>
              <TableCell align="left">{provider.bookings}</TableCell>
              <Button
                variant="contained" 
                value='pro'
                onClick={console.log('booked')}
              >
                book
              </Button>
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
              <TableCell align="left"># Bookings</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoaded ? renderProvidersTable() : <p>Providers loading...</p>}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

export default ProviderSearch