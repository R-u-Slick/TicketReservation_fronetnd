import { Container, Typography, Box, IconButton } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import { PropTypes } from "prop-types";
import { useState, useEffect } from "react";
import { ADMIN, CLIENT } from "../../constants/roles";
import HallEdit from "../../components/HallEdit/HallEdit";

const HallView = ({ hall, role }) => {
  const [currentHall, setCurrentHall] = useState(hall);
  const handleDelete = (event) => {
    const editedPlan = [...currentHall.plan];
    editedPlan.splice(event.currentTarget.id, 1);
    setCurrentHall({ ...currentHall, plan: editedPlan });
  };
  useEffect(() => {
    setCurrentHall(hall);
  }, [hall]);
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
            {currentHall.plan.map((row, index) => (
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
            {currentHall.plan.map((row) => {
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
          {role === ADMIN && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
              ml="1rem"
            >
              {currentHall.plan.map((seat, index) => {
                return (
                  <IconButton
                    aria-label="delete"
                    size="medium"
                    onClick={handleDelete}
                    id={index}
                  >
                    <DeleteIcon
                      fontSize="inherit"
                      sx={{ color: "#E10050", margin: "-0.05rem" }}
                    />
                  </IconButton>
                );
              })}
            </Box>
          )}
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
            Total rows: {currentHall.plan.length}
          </Typography>
          <Typography variant="body1" mt="2rem">
            Total seats:
            {currentHall.plan.reduce((result, row) => result + row.length, 0)}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

HallView.defaultProps = {
  hall: [],
  role: null,
};

HallView.propTypes = {
  hall: PropTypes.object,
  role: PropTypes.string,
};

export default HallView;
