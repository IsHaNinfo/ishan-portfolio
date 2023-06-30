import React from "react";
import { Grid, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const About = () => {
  const iconStyle = {
    fontSize: "3rem",
    color: "black",
    margin: "0 10px",
    cursor: "pointer",
    transition: "color 0.3s ease-in-out",
    marginTop: "15px",
  };

  const hoverStyle = {
    color: "red",
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} sx={{ ml: "auto", mt: 30, justifyContent: "flex-end" }}>
        <Grid sx={{ ml: 15 }}>
          <Typography variant="h4">--Hello</Typography>
          <Typography
            variant="h2"
            sx={{ fontSize: "4.5rem", fontFamily: "Raleway" }}
          >
            I'm <b style={{ color: "red" }}>Ishan </b>
            Nethmina
          </Typography>
          <Typography variant="h5">
            IT undergraduate student and full stack developer
          </Typography>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <a
                href="https://twitter.com/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon sx={{ ...iconStyle, ":hover": hoverStyle }} />
              </a>
              <a
                href="https://twitter.com/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon
                  sx={{ ...iconStyle, ":hover": hoverStyle }}
                  href="https://github.com/IsHaNinfo"
                />
              </a>
              <a
                href="https://twitter.com/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon
                  sx={{ ...iconStyle, ":hover": hoverStyle }}
                  href="http://linkedin.com/in/ishan-nethmina"
                />{" "}
              </a>

              <a
                href="https://twitter.com/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon sx={{ ...iconStyle, ":hover": hoverStyle }} />
              </a>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <img
          src="images/profile.png"
          alt="profile"
          style={{ width: 450, marginTop: 120, marginLeft: 150 }}
        />
      </Grid>
    </Grid>
  );
};

export default About;
