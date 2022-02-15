import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/material/Menu';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space_between"
  },
  link: {
    width: "60px",
    color: "#FFF",
    cursor: "pointer",
    textDecoration: "none",
    "&:hover": {
      borderBottom: "1px solid white",
    },
  },
  placeholder: {
    width: "60px"
  },
  logo: {
    flexGrow: "1",
  }
}))

function NavigationBar({ user, setUser}) {

    const classes = useStyles();

    function logOut() {
      return(
        <Link to="/" className={classes.link}>
          Log Out
        </Link>
      )
    }

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <div className={classes.placeholder}></div>
            <Typography variant="h4" className={classes.logo}>
              HouseStuff
            </Typography>
            {!!Object.keys(user).length ? logOut() : <></>}
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default NavigationBar