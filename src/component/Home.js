import React from "react";
import "./style.css";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Card,CardContent, Input } from "@mui/material";
import {Paper} from "@mui/material";

function Home() {
  return (
    
      <div className="tracker-main-container">
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              alignContent="center"
              style={{ minHeight: "200px" }}
            > 
              <Grid item xs={12}>
                <Typography
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: "2rem",
                  }}
                >
                  <img src="https://www.trackmycourier.co.in/track-logo.png" />
                </Typography>
              </Grid>
            </Grid>

            <h1 style={{ color: "#fff", textAlign: "center" }}>
              Check Live Status
            </h1>

            <div className="card"> 
         <Card sx={{ minWidth: 436 ,minHeight:336}} className="card-container">
          {/* <Input placeholder="name" required="true" className="Mui-focused"  /> */}
    </Card>
     </div>
     <Typography className="footer-container" sx={{marginTop: 'calc(10% + 60px)',
position: 'fixed',
bottom: 0,
width: '100%',height:'50px'
}} component="footer" ></Typography>
          </Grid>
        </Grid>
      </div>
    
  );
}

export default Home;
