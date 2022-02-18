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

function OwnerDashTable({ user, setUser }) {
  const [properties, setProperties] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)
  const history = useHistory()
    
    useEffect(() => {
      setIsLoaded(false)
      fetch("/me")
      .then(res => res.json())
      .then(propertyData => {
        setProperties(propertyData.properties)
        setIsLoaded(true)
      })
    }, [])

    function handleDelete(e, id) {
      fetch(`/properties/${id}`, {
        method: "DELETE"
      })
      const updatedProperties = properties.filter(p => p.id !== id)
      setProperties([...updatedProperties])
    }

    function viewProperty(e) {
      history.push(`/owner/property/${e.target.id}`)
    }

    function renderPropertiesTable() {
      if (!!properties.length) {
        const propertiesRows = properties.map((property) => (
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
            <TableCell align="left">
              <Button
                variant="contained" 
                value='pro'
                id={property.id}
                onClick={(e) => viewProperty(e)}
                >
                View Property
              </Button>
            </TableCell>
            <TableCell align="left">          
              <Button
                variant="contained" 
                value='pro'
                onClick={(e) => handleDelete(e, property.id)}
              >
                Delete Property
              </Button>
            </TableCell>
          </TableRow>
        ))
        return(propertiesRows)
      } else {
        return(<p>No properties yet...</p>)
      }
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
          {isLoaded ? renderPropertiesTable() : <p>Properties loading...</p>}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OwnerDashTable;