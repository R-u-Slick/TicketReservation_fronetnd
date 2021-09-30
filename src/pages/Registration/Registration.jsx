import * as React from "react";
import { useState, useEffect } from "react";
import { Button, InputLabel, MenuItem } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/system";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";
import "./Registration.scss";

const theme = createTheme();

export default function Registration({ error, onSubmit, cities }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [role, setRole] = useState("client");

  useEffect(() => {
    setCity(cities[0] ? cities[0]._id : "");
  }, [cities]);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { firstName, lastName, email, password, city, role };
    onSubmit(data);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" className="registration">
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
            New user registration
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={handleFirstNameChange}
                  value={firstName}
                  autoComplete="fname"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={handleLastNameChange}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleEmailChange}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handlePasswordChange}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={6}>
                <InputLabel id="city-label">City</InputLabel>
                <Select
                  labelId="city-label"
                  id="city-select"
                  value={city}
                  label="City"
                  onChange={handleCityChange}
                  sx={{ width: "100%" }}
                >
                  {cities.map((cityItem) => (
                    <MenuItem key={cityItem._id} value={cityItem._id}>
                      {cityItem.name}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={6}>
                <InputLabel id="role-label">Role</InputLabel>
                <Select
                  labelId="role-label"
                  id="role-select"
                  value={role}
                  label="Role"
                  onChange={handleRoleChange}
                  sx={{ width: "100%" }}
                >
                  <MenuItem value="client">Client</MenuItem>
                  <MenuItem value="admin">Administrator</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <NavLink to="/login">Already have an account? Sign in</NavLink>
              {error.map((errorMessage) => (
                <div key={errorMessage} className="error">
                  {errorMessage}
                </div>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

Registration.defaultProps = {
  onSubmit: () => {},
  error: [],
  cities: [],
};

Registration.propTypes = {
  onSubmit: PropTypes.func,
  error: PropTypes.array,
  cities: PropTypes.array,
};
