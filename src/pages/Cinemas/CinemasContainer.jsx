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
  Button,
} from "@material-ui/core";
import Cinemas from "./Cinemas";
import { selectCinemaData } from "../../store/cinema/selectors";
import { selectCityData } from "../../store/city/selectors";
import { selectUserData } from "../../store/user/selectors";
import { cinemaFetch } from "../../store/cinema/asyncActions";
import { cityFetch } from "../../store/city/asyncActions";
import Header from "../../components/Header/HeaderContainer";
import formatRequest from "../../helpers/formatRequest";
import { cinemaFetchUpdate } from "../../store/cinema/asyncActions";

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

  useEffect(() => {
    setFilteredCinemas(
      cinemasList.filter((cinema) => cinema.city._id === currentCityId)
    );
  }, [cinemasList]);

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

  const handleDeleteCinema = async (cinema) => {
    try {
      await formatRequest("/cinema", "DELETE", { id: cinema._id });
      dispatch(cinemaFetchUpdate());
    } catch (err) {
      console.log(err);
    }
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
            <FormControl sx={{ mt: 1, mr: 3, minWidth: 120 }}>
              <InputLabel id="selectCityLabel">City</InputLabel>
              <Select
                labelId="selectCityLabel"
                id="selectCity"
                value={currentCityId}
                label="Age"
                onChange={handleCityChange}
              >
                <MenuItem value="">Show all</MenuItem>
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
            <FormControl sx={{ height: 70, justifyContent: "center" }}>
              <Button variant="outlined">Add a cinema</Button>
            </FormControl>
          </Grid>
          {filteredCinemas.map((cinema) => {
            return (
              <Cinemas
                key={cinema._id}
                cinema={cinema}
                role={userData ? userData.role : ""}
                onDeleteCinema={handleDeleteCinema}
              />
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default CinemasContainer;
