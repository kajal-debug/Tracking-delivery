import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";

export default function ImgMediaCard() {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={12}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          alignContent="center"
          style={{
            minHeight: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card style={{ width: "50%", padding: "30px 40px" }}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                style={{ width: "100%" }}
              />
              <TextField
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                style={{ width: "100%" }}
              />
              <FormControl style={{ width: "100%" }}>
                <InputLabel id="demo-simple-select-label">Courier</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  //value={age}
                  label="Courier"
                  //onChange={handleChange}
                >
                  <MenuItem value="XpressBees">XpressBees</MenuItem>
                  <MenuItem value="Fedex">Fedex</MenuItem>
                  <MenuItem value="eKart">eKart</MenuItem>

                  <MenuItem value="Sky King">Sky King</MenuItem>
                  <MenuItem value="DHL">DHL</MenuItem>
                  <MenuItem value="DTDC">DTDC</MenuItem>

                  <MenuItem value="Delhi Very">Delhi Very</MenuItem>
                  <MenuItem value="Gati">Gati</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="outlined-basic"
                label="Tracting Number"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Box>
            <Stack direction="row" style={{ marginLeft: "15px" }}>
              <Button
                variant="outlined"
                style={{ width: "100%", margin: "20px 10px" }}
                color="error"
              >
                Track Your Order
              </Button>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    
    </Grid>
  );
}
