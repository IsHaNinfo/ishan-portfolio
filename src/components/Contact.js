import React, { useState } from "react";
import MainData from "./MainData";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const Contact = () => {
  return (
    <div>
      <MainData />

      <Grid sx={{ mt: 7, textAlign: "center" }}>
        <Typography variant="h2">Contact me</Typography>
      </Grid>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "5rem" }}
      >
        <Card sx={{ maxWidth: 345, margin: "0 1rem" }}>
          <CardMedia
            component={PhoneIcon}
            sx={{
              fontSize: 68,
              margin: "auto",
              color: "#f44336",
              ml: 9,
              mt: 5,
            }}
          />
          <CardContent sx={{ mt: 6 }}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              Contact Number
            </Typography>
            <Typography variant="body1">(+94) 71 3246556</Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 345, margin: "0 1rem" }}>
          <CardMedia
            component={EmailIcon}
            sx={{ fontSize: 68, color: "#ff9800", ml: 9, mt: 5 }}
          />
          <CardContent sx={{ mt: 6 }}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              Email
            </Typography>
            <Typography variant="body1">ishaninfo56@gmail.com</Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 345, margin: "0 1rem", width: 200 }}>
          <CardMedia
            component={LocationOnIcon}
            sx={{
              fontSize: 68,
              color: "#4caf50",
              mt: 5,
              ml: 9,
            }}
          />
          <CardContent sx={{ mt: 6 }}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              Address
            </Typography>
            <Typography variant="body1">Mathugama,Colombo</Typography>
          </CardContent>
        </Card>
      </div>
      <Grid sx={{ textAlign: "center", mt: 7 }}>
        <Button
          style={{
            margin: "10px",
            background: "#F72F20",
            height: "50px",
            width: "250px",
            color: "white",
            fontWeight: 700,

            letterSpacing: ".3rem",
            mr: 2,
          }}
        >
          Thank You
        </Button>
      </Grid>
    </div>
  );
};

export default Contact;
