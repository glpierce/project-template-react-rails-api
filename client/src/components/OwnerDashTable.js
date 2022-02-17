import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function OwnerDashTable({ user, setUser }) {
  const [properties, setProperties] = useState([]);

    console.log('Before click: ', properties)
    
    useEffect(() => {
      fetch("/owners/me")
      .then(res => res.json())
      .then(propertyData => setProperties(propertyData.properties))
    }, [])

    function handleClick(e, id) {
      console.log('clicked', id)
      fetch(`/properties/${id}`, {
        method: "DELETE"
      })
      const updatedProperties = properties.filter(p => p.id !== id)
      setProperties([...updatedProperties])
      console.log('success')
    }
    
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Property</TableCell>
            <TableCell align="left">Address</TableCell>
            <TableCell align="left"># Tasks</TableCell>
            <TableCell align="left"># Bookings</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {properties.map((property) => (
            <TableRow
              key={property.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {property.id}
              </TableCell>
              <TableCell align="left">{property.address}</TableCell>
              <TableCell align="left">{property.tasks ? property.tasks.length : 0}</TableCell>
              <TableCell align="left">{property.bookings ? property.bookings.length : 0}</TableCell>
              <Button
                variant="contained" 
                value='pro'
                onClick={(e) => handleClick(e, property.id)}
              >
                Delete
              </Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OwnerDashTable;