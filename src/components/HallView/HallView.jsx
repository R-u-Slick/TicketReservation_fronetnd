import { Container, Typography, Box } from "@material-ui/core";
import { PropTypes } from "prop-types";

// eslint-disable-next-line arrow-body-style
const HallView = ({ hall }) => {
  return (
    <Container>
      <Typography variant="h4">{hall.name}</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5" mb="2rem">
          Screen
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box></Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {hall.plan.map((row) => {
              return (
                <Box sx={{ display: "inline-flex" }}>
                  {row.map((seat) => {
                    return (
                      <Box
                        sx={{
                          margin: "0.15rem",
                          background: seat.color,
                          width: `${2 * seat.capacity}rem`,
                          height: "2rem",
                          borderRadius: seat.capacity > 1 ? "40%" : "50%",
                        }}
                      />
                    );
                  })}
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "row",
          }}
        >
          <Typography variant="body1" mt="2rem">
            Total rows: {hall.plan.length}
          </Typography>
          <Typography variant="body1" mt="2rem">
            Total seats:
            {hall.plan.reduce((result, row) => result + row.length, 0)}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

HallView.defaultProps = {
  hall: [],
};

HallView.propTypes = {
  hall: PropTypes.object,
};

export default HallView;
