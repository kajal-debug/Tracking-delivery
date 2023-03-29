import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function Logo() {
  return (
    <>
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
          <Typography>
            <h1
              style={{ color: "#fff", textAlign: "center", fontWeight: "500" }}
            >
              Check Live Status
            </h1>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Logo;
