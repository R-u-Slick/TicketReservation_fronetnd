import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Grid,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@material-ui/core";
import Cinemas from "./Cinemas";
import { selectCinemaData } from "../../store/cinema/selectors";
import { selectCityData } from "../../store/city/selectors";
import { selectUserData } from "../../store/user/selectors";
import cinemaFetch from "../../store/cinema/asyncActions";
import { cityFetch } from "../../store/city/asyncActions";
import Header from "../../components/Header/HeaderContainer";

const CinemasContainer = () => {
  const userData = useSelector(selectUserData);
  const cinemasList = useSelector(selectCinemaData);
  const citiesList = useSelector(selectCityData);
  const [currentCityId, setCurrentCityId] = useState("");
  const [filteredCinemas, setFilteredCinemas] = useState(cinemasList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cinemaFetch());
    dispatch(cityFetch());
  }, []);

  const handleCityChange = (event) => {
    setCurrentCityId(event.target.value);
    if (!event.target.value) {
      setFilteredCinemas(cinemasList);
      return;
    }
    setFilteredCinemas(
      cinemasList.filter((cinema) => cinema.city._id === event.target.value)
    );
  };
  return (
    <>
      <Header />
      <Container
        sx={{
          mt: "1rem",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h2">Cinemas</Typography>
          </Grid>
          <Grid item xs={12}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="selectCityLabel">City</InputLabel>
              <Select
                labelId="selectCityLabel"
                id="selectCity"
                value={currentCityId}
                label="Age"
                onChange={handleCityChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {citiesList.map((city) => {
                  return (
                    <MenuItem key={city._id} value={city._id}>
                      {city.name}
                    </MenuItem>
                  );
                })}
              </Select>
              <FormHelperText>Please, choose a city</FormHelperText>
            </FormControl>
          </Grid>
          {filteredCinemas.map((cinema) => {
            return (
              <Cinemas
                key={cinema._id}
                cinema={cinema}
                role={userData ? userData.role : ""}
              />
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default CinemasContainer;
