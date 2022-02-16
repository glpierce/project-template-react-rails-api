import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import DateRangeIcon from '@mui/icons-material/DateRange';

function OwnerDashList({ handleListClick }) {

    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <nav aria-label="main mailbox folders">
            <List>
              <ListItem onClick={(e) => handleListClick(e, 'properties')} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Properties" />
                </ListItemButton>
              </ListItem>
              <ListItem onClick={(e) => handleListClick(e, 'bookings')} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <DateRangeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Bookings" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
          <Divider />
        </Box>
    )
}

export default OwnerDashList;