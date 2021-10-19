import {
  Container,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import { Box } from "@material-ui/system";
import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

const CinemaEditor = ({ selectedCinema, citiesList, onCinemaSave }) => {
  const [cinemaName, setCinemaName] = useState(selectedCinema.name);
  const [cinemaNameError, setCinemaNameError] = useState(false);
  const [cinemaDescription, setCinemaDescription] = useState(
    selectedCinema.description
  );
  const [cinemaDescriptionError, setCinemaDescriptionError] = useState(false);
  const [cinemaImageInput, setCinemaImageInput] = useState(
    selectedCinema.image
  );
  const [cinemaImage, setCinemaImage] = useState(selectedCinema.image);
  const [cinemaImageError, setCinemaImageError] = useState(false);
  const [currentCityId, setCurrentCityId] = useState("");

  useEffect(() => {
    if (selectedCinema.city) {
      setCurrentCityId(selectedCinema.city._id);
    } else {
      setCurrentCityId("");
    }
  }, []);

  const handleCinemaNameChange = (event) => {
    if (!event.target.value) {
      setCinemaNameError(true);
    } else {
      setCinemaNameError(false);
    }
    setCinemaName(event.target.value);
  };

  const handleCityChange = (event) => {
    setCurrentCityId(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    if (!event.target.value) {
      setCinemaDescriptionError(true);
    } else {
      setCinemaDescriptionError(false);
    }
    setCinemaDescription(event.target.value);
  };

  const handleCinemaImageInput = (event) => {
    if (!event.target.value) {
      setCinemaImageError(true);
    } else {
      setCinemaImageError(false);
    }
    setCinemaImageInput(event.target.value);
  };

  const handleCinemaImageChange = (event) => {
    if (!cinemaImageError) {
      setCinemaImage(cinemaImageInput);
    }
  };

  const handleCinemaSave = () => {
    if (currentCityId && cinemaDescription && cinemaImage && cinemaName) {
      const editedCinema = {
        ...selectedCinema,
        city: currentCityId,
        description: cinemaDescription,
        image: cinemaImage,
        name: cinemaName,
      };
      onCinemaSave(editedCinema);
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <Container>
      <Typography mb="2rem" variant="h2">
        {selectedCinema._id
          ? `${selectedCinema.name} - cinema edit`
          : "Create a new cinema"}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <img src={cinemaImage} className="cinemas__image" />
        </Grid>
        <Grid item xs={8}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              error={cinemaNameError}
              id="cinemaName"
              label="Cinema name"
              variant="outlined"
              sx={{ width: 250 }}
              value={cinemaName}
              onChange={handleCinemaNameChange}
            />
            <FormControl sx={{ minWidth: 250 }}>
              <InputLabel id="selectCityLabel">City</InputLabel>
              <Select
                labelId="selectCityLabel"
                id="selectCity"
                value={currentCityId}
                label="Age"
                onChange={handleCityChange}
              >
                {citiesList.map((city) => {
                  return (
                    <MenuItem key={city._id} value={city._id}>
                      {city.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
          <Box mt="1rem" sx={{ display: "flex", justifyContent: "center" }}>
            <TextField
              error={cinemaDescriptionError}
              sx={{ width: "100%" }}
              id="outlined-multiline-static"
              label="Multiline"
              multiline
              rows={5}
              value={cinemaDescription}
              onChange={handleDescriptionChange}
            />
          </Box>
          <Box
            mt="1rem"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <TextField
              error={cinemaImageError}
              id="cinemaImage"
              label="Cinema image url"
              variant="outlined"
              sx={{ width: "75%" }}
              value={cinemaImageInput}
              onChange={handleCinemaImageInput}
              helperText={cinemaImageError ? "Enter a valid image URL" : ""}
            />
            <Box mt="0.5rem">
              <Button variant="outlined" onClick={handleCinemaImageChange}>
                Change image
              </Button>
            </Box>
          </Box>
          <Box
            mt="1rem"
            sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
          >
            <Box
              sx={{
                width: 180,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Link to="/cinemas" className="cinemas__button">
                <Button variant="outlined" color="error">
                  Cancel
                </Button>
              </Link>
              <Button variant="contained" onClick={handleCinemaSave}>
                Save
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

CinemaEditor.defaultProps = {
  selectedCinema: "",
  citiesList: [],
  onCinemaSave: () => {},
};

CinemaEditor.propTypes = {
  selectedCinema: PropTypes.object,
  citiesList: PropTypes.array,
  onCinemaSave: PropTypes.func,
};

export default CinemaEditor;
