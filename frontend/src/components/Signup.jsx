import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { Link, useNavigate } from "react-router-dom";
import { Button, CardActions } from "@mui/material";
import "./Signup.css";
import Navbars from "./Navbars";
import { useState } from "react";

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [file, setFile] = useState(null);
  const [err, setErr] = useState("");
  // const [load, setLoad] = useState("");

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:5000/api/v2/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
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
      alert("You are succesfully registered!!");
      navigate("/login");
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
              <Typography className="typo" variant="subtitle1">
                Sign Up to connect and see videos from your friends
              </Typography>
              {err != "" && <Alert severity="error">{err}</Alert>}
              <TextField
                id="standard-basic"
                label="Name"
                type="text"
                variant="standard"
                fullWidth={true}
                margin="dense"
                size="small"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Email"
                type="email"
                variant="standard"
                fullWidth={true}
                margin="dense"
                size="small"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Password"
                variant="standard"
                fullWidth={true}
                margin="dense"
                size="small"
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
              <Button
                color="secondary"
                fullWidth={true}
                variant="outlined"
                margin="dense"
                startIcon={<CloudUploadIcon />}
                component="label"
              >
                Upload profile pic
                <input
                  type="file"
                  accept="images/*"
                  hidden
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </Button>
            </CardContent>

            <CardActions>
              <Button
                color="primary"
                fullWidth={true}
                variant="contained"
                // disabled={load}
                onClick={handleSubmit}
              >
                Sign Up
              </Button>
            </CardActions>
            <CardContent>
              <Typography className="typo" variant="subtitle1">
                By Signing up, you agree to our Terms & Conditions
              </Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" className="card2">
            <CardContent>
              <Typography className="typo" variant="subtitle1">
                Have an account?
                <Link to="/login" style={{ textDecoration: "none" }}>
                  Login
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
