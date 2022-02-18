import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Moment from 'moment'
import Button from '@mui/material/Button';




function OwnerDashBookings({ user, setUser }) {
    const [data, setData] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [cancelToggle, setCancelToggle] = useState(false)


    useEffect(() => {
        fetch("/me")
        .then(res => res.json())
        .then(propertyData => setData(propertyData.properties))
      }, [cancelToggle])

      function handleClick(e, id) {
        fetch(`/bookings/${id}`, {
          method: "DELETE"
        })
        .then(r => {
          if (r.ok) {
            setCancelToggle(!cancelToggle)
          }
        })
      }

      function renderAction(booking) {
        if (new Date(booking.date) >= new Date()) {
          return(
            <Button
                variant="contained" 
                value='pro'
                onClick={(e) => handleClick(e, booking.id)}
            >
              Cancel
            </Button>
          )
        } else {
          return(<></>)
        }
      }

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
            <TableCell align="left">{Moment(r.date).format("MM/DD/YYYY")}</TableCell>
            <TableCell align="left">${r.price}</TableCell>
            <TableCell align="left">{new Date(r.date) >= new Date() ? "Upcoming" : "Complete"}</TableCell>
            <TableCell align="left">{renderAction(r)}</TableCell>
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
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Action</TableCell>
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
