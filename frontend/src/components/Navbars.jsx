import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "./Navbars.css";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <div className="menu">
            <div className="home-menu">
              <Link to="/" className="btn">
                Home
              </Link>
            </div>
            <div className="auth-menu">
              <Link to="/login" className="btn">
                Login
              </Link>
              <Link to="/signup" className="btn">
                Sign up
              </Link>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
