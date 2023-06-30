import React from "react";
import {
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
} from "@mui/material";
import MainData from "./MainData";
import WidgetsIcon from "@mui/icons-material/Widgets";
const Blogs = () => {
  return (
    <div>
      <MainData />
      <Typography
        variant="h3"
        sx={{ ml: 15, mt: 8 }}
        startIcon={<WidgetsIcon />}
      >
        Blogs
      </Typography>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginLeft: "110px",
          marginTop: "35px",
        }}
      >
        <Card sx={{ maxWidth: 345, margin: "10px" }}>
          <CardMedia component="img" height="250" src="images/devops.png" />
          <CardContent>
            <Typography variant="h6" fontWeight="bold">
              The DevOps Lifecycle
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              href="Yhttps://medium.com/@ishaninfo56/the-devops-lifecycle-46f1ae211dd"
            >
              Read More
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, margin: "10px" }}>
          <CardMedia component="img" height="250" src="images/Next.jpeg" />
          <CardContent>
            <Typography variant="h6" fontWeight="bold">
              Why Next.js important in 2023 ?
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              href="https://medium.com/@ishaninfo56/why-next-js-important-in-2023-777da9d9c786"
            >
              Read More
            </Button>
          </CardActions>
        </Card>
      </div>
      <Grid sx={{ ml: 155 }}>
        <Button
          variant="danger"
          color="error"
          href="https://medium.com/@ishaninfo56"
          style={{
            margin: "10px",
            background: "#F72F20",
            height: "50px",
            width: "150px",
            color: "white",
            fontWeight: 700,

            letterSpacing: ".3rem",
            mr: 2,
          }}
        >
          See More
        </Button>
      </Grid>
    </div>
  );
};

export default Blogs;
