import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
// import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { Link, useNavigate } from "react-router-dom";
import { Button, CardActions } from "@mui/material";
import "./Login.css";
import Navbars from "./Navbars";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");

  const handleLogin = async () => {
    const response = await fetch("http://localhost:5000/api/v2/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: pass,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Credentials!!");
    }
    if (json.success) {
      alert("You are succesfully LoggedIn!!");
      navigate("/");
    }
  };
  return (
    <>
      <Navbars />
      <div className="signupWrapper">
        <div className="signupCard">
          <Card variant="outlined">
            <div className="tiktok-logo">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/1280px-TikTok_logo.svg.png"
                alt="tiktok-logo"
              />
            </div>
            <CardContent>
              {err != "" && <Alert severity="error">{err}</Alert>}
              <TextField
                id="standard-basic"
                type="email"
                label="Email"
                variant="standard"
                fullWidth={true}
                margin="dense"
                size="small"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="standard-basic"
                type="password"
                label="Password"
                variant="standard"
                fullWidth={true}
                margin="dense"
                size="small"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
              <Typography color="primary" className="typo2" variant="subtitle1">
                Forgot Password ?
              </Typography>
            </CardContent>

            <CardActions>
              <Button
                color="primary"
                fullWidth={true}
                variant="contained"
                onClick={handleLogin}
              >
                Login
              </Button>
            </CardActions>
          </Card>
          <Card variant="outlined" className="card2">
            <CardContent>
              <Typography className="typo" variant="subtitle1">
                Don't have an account ?
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  Sign up
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
