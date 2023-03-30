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
import "./style.css";
import axios from "axios";

export default function ImgMediaCard() {
  const [formValue, setFormValue] = React.useState({});

  const chnageHandler = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };
  
  const submitHandler = (event) => {
    event.preventDefault();
    axios.post('http://localhost:4000/route',{formValue:formValue})
    .then(response => console.log("hi"))
    .catch(error => console.error(error));
  };

  console.log("formValue", formValue);
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
                label="email"
                variant="outlined"
                style={{ width: "100%" }}
                type="text"
                name="email"
                onChange={chnageHandler}
              />
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                style={{ width: "100%" }}
                type="text"
                name="name"
                onChange={chnageHandler}
              />
              <TextField
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                type="number"
                name="phone"
                onChange={chnageHandler}
                style={{ width: "100%" }}
              />
              <FormControl style={{ width: "100%" }}>
                <InputLabel id="demo-simple-select-label">Courier</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  //value={age}
                  name="courier"
                  label="Courier"
                  onChange={chnageHandler}
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
                type="number"
                name="tracknumber"
                onChange={chnageHandler}
              />
            </Box>
            <Stack direction="row" style={{ marginLeft: "15px" }}>
              <Button
                variant="outlined"
                style={{ width: "100%", margin: "20px 10px" }}
                color="error"
                onClick={submitHandler}
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
