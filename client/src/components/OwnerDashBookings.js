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

      function renderBookings() {
        const bookingRows = [];
        data.forEach((p) => p.tasks.forEach((t) => t.bookings.forEach((b) => {
          bookingRows.push({
            address: p.address,
            task_name: t.task_name,
            date: b.date,
            price: b.price,
            id: b.id
          })
        })))
        return (
          bookingRows.map((r) => {
            return(
            <TableRow
            key={r.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell align="left">{r.address}</TableCell>
            <TableCell align="left">{r.task_name}</TableCell>
            <TableCell align="left">{r.date}</TableCell>
            <TableCell align="left">{r.price}</TableCell>
          </TableRow>)
          })
        )
      }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Property</TableCell>
            <TableCell align="left">Service</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderBookings()}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OwnerDashBookings;
