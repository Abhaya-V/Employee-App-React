import React from 'react'
import { Box, Button,TextField, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./Form.css"


const Form = () => {
return (
      <Box
          sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "linear-gradient(to left, rgb(17, 2, 2), rgb(24, 21, 21))",
            
          }}
      >
        
          <form className="form-container">
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
                <AccountCircleIcon sx={{ display: { xs: "none", md: "flex" }, fontSize: 40, color: "white", mr: 1 }} />
                <Typography variant="h5" fontWeight="bold" textAlign="center" color="white">
                    EMPLOYEE FORM
                </Typography>
            </Box>

              <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  margin="normal"
                  type="text"
              />

                <TextField
                  fullWidth
                  label="Designation"
                  variant="outlined"
                  margin="normal"
                  type="text"
              />

                <TextField
                  fullWidth
                  label="Location"
                  variant="outlined"
                  margin="normal"
                  type="text"
              />

                <TextField
                  fullWidth
                  label="Salary"
                  type="tel"
                  variant="outlined"
                  margin="normal"
              />
             
            
              <Button variant="contained"  fullWidth  sx={{
            mt: 3,
            borderRadius: 9,
            color: "#fff",
            "&:hover": {
              backgroundColor: "#555"
            }}}  >       
                Submit
              </Button>

              

              
          </form>
      </Box>
  );
};

export default Form


