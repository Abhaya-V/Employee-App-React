import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  sx={{ 
          background: 'linear-gradient(to right,rgb(48, 35, 35),rgb(68, 53, 53))', 
          padding: '4px 0', 
          marginBottom:"3px"
        }}>
        <Toolbar>
      
        <AccountCircleIcon sx={{ display: { xs: "none", md: "flex" }, fontSize: 40, color: "white", mr: 1 }} />  
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          EMPLOYEE APP
          </Typography>
          
          
          <Button color="inherit" sx={{ borderRadius: 3,p:2,"&:hover": {backgroundColor: "black"}}} ><Link to={"/"} style={{color:"white"}}>Dashboard</Link></Button>
          <Button color="inherit" sx={{ borderRadius: 3,p:2,"&:hover": {backgroundColor: "black"}}}><Link to={"/form"} style={{color:"white"}}>Employee Form</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>     

    </div>
  )
}

export default Navbar

