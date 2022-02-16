import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function OwnerDashTable() {
    const [properties, setProperties] = useState([]);

    // useEffect(() => {
    //     fetch("/properties/${user.id}")
    //     .then(res => res.json())
    //     .then(propertyData => setProperties(propertyData))
    // }, [])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Property</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right"># Tasks</TableCell>
            <TableCell align="right"># Bookings</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {properties.map((property) => (
            <TableRow
              key={property.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {property.name}
              </TableCell>
              <TableCell align="right">{property.name}</TableCell>
              <TableCell align="right">{property.address}</TableCell>
              <TableCell align="right">{property.tasks}</TableCell>
              <TableCell align="right">{property.bookings}</TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OwnerDashTable;
