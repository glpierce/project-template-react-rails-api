import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Moment from 'moment'

function PropertyDash() {
    const [property, setProperty] = useState({})
    const { id } = useParams()
    const history = useHistory()
    const [deleteToggle, setDeleteToggle] = useState(false)

    useEffect(() => {
        getProperty()
    },[deleteToggle])

    function getProperty() {
        fetch(`/properties/${id}`)
        .then((r) => r.json())
        .then(propertyData => setProperty(propertyData))
    }

    function bookingDate(bookings, taskId) {
        const newestBookingDate = bookings.reduce((priorBooking, booking) => (priorBooking.date > booking.date ? priorBooking : booking)).date
        if (!!bookings.length && (new Date(newestBookingDate) >= new Date())) {
            return(Moment(newestBookingDate).format('MM/DD/YYYY'))
        } else {
            return(renderBookButton(taskId))
        }
    }

    function renderBookButton(taskId) {
        return(
            <Button
                variant="contained" 
                value='pro'
                id={property.id}
                onClick={(e) => history.push(`/owner/property/${property.id}/book/${taskId}`)}
            >
                Book Service
            </Button>
        )
    }

    function renderTaskTable() {
        if (!!property.tasks.length) {
            return(property.tasks.map((task) => (
              <TableRow
                key={task.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">{task.task_name}</TableCell>
                <TableCell align="left">{Moment(task.last_completed).format('MM/DD/YYYY')}</TableCell>
                <TableCell align="left">{`Every ${task.frequency} days`}</TableCell>
                <TableCell align="left">{task.status}</TableCell>
                <TableCell align="left">{!!task.bookings.length ? bookingDate(task.bookings, task.id) : renderBookButton(task.id)}</TableCell>
                <TableCell align="left">
                <Button
                  variant="contained" 
                  value='pro'
                  onClick={(e) => handleDelete(e, task.id)}
                >
                  Delete Task
                </Button>
                </TableCell>
              </TableRow>
            )))
        } else {
            return(<p>No tasks yet...</p>)
        }
    }

    function handleDelete(e, id) {
        fetch(`/tasks/${id}`, {
          method: "DELETE"
        })
        .then(r => {
            if (r.ok) {
                setDeleteToggle(!deleteToggle)
            }
        })
      }

    return(
        <>
        <h2>{property.address}</h2>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Task</TableCell>
                        <TableCell align="left">Last Service</TableCell>
                        <TableCell align="left">Frequency</TableCell>
                        <TableCell align="left">Status</TableCell>
                        <TableCell align="left">Upcoming Booking</TableCell>
                        <TableCell align="left"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {!!Object.keys(property).length ? renderTaskTable() : <p>Tasks loading...</p>}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    )
}

export default PropertyDash