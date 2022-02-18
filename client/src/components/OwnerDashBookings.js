import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function OwnerDashBookings({ user, setUser }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/me")
        .then(res => res.json())
        .then(propertyData => setData(propertyData.properties))
      }, [])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Bookings</TableCell>
            <TableCell align="left">Property</TableCell>
            <TableCell align="left">Service</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((d) => (
            <TableRow
              key={d.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{d.id} </TableCell>
              <TableCell align="left">{d.address}</TableCell>
              <TableCell align="left">{d.tasks.map((t) => t)}</TableCell>
              {d.bookings.map((b) => <TableCell align="left">{b.date}</TableCell>)}
              {d.bookings.map((b) => <TableCell align="left">{b.price}</TableCell>)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OwnerDashBookings;
