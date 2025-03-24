import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import axios from 'axios';
import { Grid2 } from '@mui/material';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ padding: "20px", backgroundColor: "#121212" }}>
      <Grid2 container spacing={3} justifyContent="center">
        {data.map((datas, i) => (
          <Grid2 key={i} xs={12} sm={6} md={4} lg={3}  item>
            <Card
              sx={{
                width: 250,
                height: 120,
                mt: 1,
                mb: 1.3,
                p: 2,
                borderRadius: 3,
                boxShadow: "0 4px 10px rgba(255, 255, 255, 0.2)",
                transition: "transform 0.3s ease-in-out",
                background: "linear-gradient(to right, #333, #555)",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 6px 15px rgba(255, 255, 255, 0.3)",
                },
              }}
            >
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" sx={{ color:'rgb(51, 214, 179)', fontWeight: "bold", textAlign:"center"}}>
                    ID: {datas.id}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'white', fontWeight: "bold", mb: 1,textAlign:"center" }}>
                    {datas.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#ccc', fontStyle: "italic",textAlign:"center" }}>
                    {datas.email}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
};

export default Dashboard;

