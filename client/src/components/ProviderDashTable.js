import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function ProviderDashTable({user}) {
    const [bookings, setBookings] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false)
    const history = useHistory()
      
      useEffect(() => {
        setIsLoaded(false)
        fetch("/me")
        .then(res => res.json())
        .then(propertyData => {
          setBookings(propertyData.bookings)
          setIsLoaded(true)
        })
      }, [])
  
      function handleClick(e, id) {
        fetch(`/bookings/${id}`, {
          method: "DELETE"
        })
        const updatedbookings = bookings.filter(p => p.id !== id)
        setBookings([...updatedbookings])
        console.log('success')
      }
  
      function renderbookingsTable() {
        if (!!bookings.length) {
          const bookingsRows = bookings.map((booking) => (
            <TableRow
              key={booking.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {booking.task.property.address}
              </TableCell>
              <TableCell align="left">{(new Date(booking.date)).toString()}</TableCell>
              <TableCell align="left">{booking.task.task_name }</TableCell>
              <TableCell align="left">{booking.bookings}</TableCell>
              {/* <TableCell>
              <Button
                variant="contained" 
                value='pro'
                onClick={() => history.push('owner/findproviders')}
                >
                Find Provider
              </Button>
                </TableCell>            */}
              <Button
                variant="contained" 
                value='pro'
                onClick={(e) => handleClick(e, booking.id)}
              >
                Completed
              </Button>
            </TableRow>
          ))
          return(bookingsRows)
        } else {
          return(<p>No bookings yet...</p>)
        }
      }
      
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Property</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Task</TableCell>
              <TableCell align="left"># Bookings</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoaded ? renderbookingsTable() : <p>bookings loading...</p>}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
export default ProviderDashTable