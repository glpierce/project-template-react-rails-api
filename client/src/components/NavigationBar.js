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
console.log(user)
    const classes = useStyles();

    function logOut() {
      const ownerBool = (user.account_type === "owner" ? true : false)
      fetch("/logout", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({owner: ownerBool})
      })
      .then((r) => {
        if (r.ok) {
          setUser({})
        }
      })
    }

    function userButtonElement(){
      return(
        user.account_type === 'owner' ?
        <Link to="/owner" className={classes.link} style={{width: "10%"}} >
          Welcome, {user.first_name} ! 
        </Link> :
        <Link to="/provider" className={classes.link} style={{width: "10%"}} >
          Welcome, {user.name} !
        </Link> 
      
        )
    }

    function logOutElement() {
      return(
        <Link to="/" onClick={logOut} className={classes.link} style={{paddingLeft: '40px'}} >
          Log Out
        </Link>
      )
    }

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
            {!!Object.keys(user).length ? <div className={classes.placeholder}></div> : <></>}
            <Typography variant="h4" className={classes.logo}>
              HouseStuff
            </Typography>
            {!!Object.keys(user).length ? userButtonElement() : <></>}
            {!!Object.keys(user).length ? logOutElement() : <></>}
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default NavigationBar