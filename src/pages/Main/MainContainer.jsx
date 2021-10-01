import React from "react";
import Header from "../../components/Header/HeaderContainer";
import FilmsList from "../../components/FilmsList/FilmsList";
import { Container } from "@material-ui/core";

const MainContainer = () => {
  return (
    <>
      <Header />
      <Container
        sx={{
          mt: "2rem",
        }}
      >
        <FilmsList />
      </Container>
    </>
  );
};

export default MainContainer;
