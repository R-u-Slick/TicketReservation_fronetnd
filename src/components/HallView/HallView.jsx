import { Container, Typography, Box, IconButton } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import { PropTypes } from "prop-types";
import { ADMIN } from "../../constants/roles";
import { v4 as uuidv4 } from "uuid";

const HallView = ({ plan, role, onDeleteRow }) => {
  const handleDeleteRow = (event) => {
    const deletedRowId = event.currentTarget.id;
    onDeleteRow(deletedRowId);
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
            {plan.map((row, index) => (
              <Typography key={uuidv4()} variant="h6" sx={{ margin: "0.2rem" }}>
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
            {plan.map((row) => {
              return (
                <Box key={uuidv4()} sx={{ display: "inline-flex" }}>
                  {row.map((seat) => {
                    return (
                      <Box
                        key={uuidv4()}
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
              {plan.map((seat, index) => {
                return (
                  <IconButton
                    key={uuidv4()}
                    aria-label="delete"
                    size="medium"
                    onClick={handleDeleteRow}
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
            Total rows: {plan.length}
          </Typography>
          <Typography variant="body1" mt="2rem">
            Total seats:
            {plan.reduce((result, row) => result + row.length, 0)}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

HallView.defaultProps = {
  plan: [],
  role: null,
  onDeleteRow: () => {},
};

HallView.propTypes = {
  plan: PropTypes.array,
  role: PropTypes.string,
  onDeleteRow: PropTypes.func,
};

export default HallView;
