import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function OwnerDashBookings({ user, setUser }) {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch("/bookings/${user.id}")
        .then(res => res.json())
        .then(bookingsData => setBookings(bookingsData))
    }, [])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Bookings</TableCell>
            <TableCell align="right">Property</TableCell>
            <TableCell align="right">Service</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Provider</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {bookings.map((booking) => (
            <TableRow
              key={booking.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{booking.name} </TableCell>
              <TableCell align="right">{booking.name}</TableCell>
              <TableCell align="right">{booking.service}</TableCell>
              <TableCell align="right">{booking.date}</TableCell>
              <TableCell align="right">{booking.provider}</TableCell>
              <TableCell align="right">{booking.price}</TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OwnerDashBookings;
