import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { Box } from "@material-ui/system";
import { Typography } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme();

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { email, password };
    props.onSubmit(data);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              onChange={handleEmailChange}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              onChange={handlePasswordChange}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <NavLink to="/registration">
                {"Don't have an account? Sign Up"}
              </NavLink>
              {props.error && (
                <div className="Login__error" style={{ color: "red" }}>
                  {props.error}
                </div>
              )}
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
