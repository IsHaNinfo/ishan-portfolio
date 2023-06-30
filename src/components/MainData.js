import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { styled } from "@mui/system";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
const pages = ["Home", "Blog", "Contact"];

function MainData() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const history = useNavigate();

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const CustomButton = styled(Button)(({ theme }) => ({
    background: "#F72F20",
    color: "white",
    fontWeight: 700,
    height: 45,
    width: 160,
    letterSpacing: ".3rem",
    mr: 2,
  }));
  const handleButtonClick = () => {
    setIsLoading(true);

    // Simulate an asynchronous operation, such as an API call or delay
    setTimeout(() => {
      setIsLoading(false);
      history.push(
        "https://drive.google.com/file/d/1NlT3J4uY4BhIX2CBmPGtsKl2dx3I6ZqE/view?usp=sharing"
      );
    }, 2000);
  };
  const handleClick = () => {
    // Perform any necessary logic or actions here

    // Navigate to a specific route using history.push()
    history("/blogs");
  };
  const handlemainClick = () => {
    // Perform any necessary logic or actions here

    // Navigate to a specific route using history.push()
    history("/");
  };
  const handlecontactClick = () => {
    // Perform any necessary logic or actions here

    // Navigate to a specific route using history.push()
    history("/contact");
  };
  return (
    <AppBar position="static" sx={{ backgroundColor: "#f0f0f0" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button
            onClick={handlemainClick}
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              ml: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            {" "}
            ISHAN
          </Button>
          <Box
            sx={{
              flexGrow: 3,
              display: { xs: "flex", md: "none" },
            }}
          >
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h3"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            Ishan Nethmina
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", gap: 60 },
              ml: 85,
            }}
          >
            <Button
              onClick={handleClick}
              sx={{
                my: 2,
                color: "black",
                display: "block",
                letterSpacing: ".3rem",
                fontWeight: 700,
              }}
            >
              BLOGS
            </Button>
            <Button
              onClick={handlecontactClick}
              sx={{
                my: 2,
                color: "black",
                display: "block",
                letterSpacing: ".3rem",
                fontWeight: 700,
              }}
            >
              CONTACTS
            </Button>
          </Box>{" "}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <CustomButton
              startIcon={<AdUnitsIcon />}
              variant="contained"
              onClick={handleButtonClick}
              disabled={isLoading}
              href="https://drive.google.com/file/d/1NlT3J4uY4BhIX2CBmPGtsKl2dx3I6ZqE/view?usp=sharing"
            >
              {isLoading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Resume"
              )}
            </CustomButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MainData;
