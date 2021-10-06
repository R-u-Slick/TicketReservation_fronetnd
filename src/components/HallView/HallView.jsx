import { Container, Typography, Box, IconButton } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import { PropTypes } from "prop-types";

const HallView = ({ hall }) => {
  const handleDelete = (event) => {
    console.log(event.target.id);
  };
  return (
    <Container>
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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
            mr="1rem"
          >
            {hall.plan.map((row, index) => (
              <Typography variant="h6" sx={{ margin: "0.2rem" }}>
                {index + 1}
              </Typography>
            ))}
          </Box>
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
                          margin: "0.2rem",
                          background: seat.color,
                          width: `${2 * seat.capacity}rem`,
                          height: "2rem",
                          borderRadius: seat.capacity > 1 ? "1rem" : "50%",
                        }}
                      />
                    );
                  })}
                </Box>
              );
            })}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
            ml="1rem"
          >
            {hall.plan.map((seat, index) => {
              return (
                <IconButton
                  id={index}
                  aria-label="delete"
                  size="medium"
                  onClick={handleDelete}
                >
                  <DeleteIcon
                    fontSize="inherit"
                    sx={{ color: "#E10050", margin: "-0.05rem" }}
                  />
                </IconButton>
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
