import React from "react";
import { Grid, Typography, Fab } from "@material-ui/core";
import RemoveIcon from "@mui/icons-material/Remove";
import { PropTypes } from "prop-types";
import { v4 as uuidv4 } from "uuid";

function ExtrasInfo({ orderedGoodsList, onDeleteGood }) {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} mt="1rem">
          <Typography variant="h5">Extras</Typography>
        </Grid>
        {orderedGoodsList.map((goodPrice) => {
          return (
            <React.Fragment key={uuidv4()}>
              <Grid item xs={4}>
                <Typography variant="body1">{goodPrice.good.name}</Typography>
              </Grid>
              <Grid item xs={4} />
              <Grid item xs={2}>
                <Typography variant="body1">{goodPrice.price} $</Typography>
              </Grid>
              <Grid item xs={2}>
                <Fab
                  id={goodPrice._id}
                  size="small"
                  aria-label="add"
                  onClick={onDeleteGood}
                  color="secondary"
                  sx={{ backgroundColor: "#f73378", color: "white" }}
                >
                  <RemoveIcon />
                </Fab>
              </Grid>
            </React.Fragment>
          );
        })}
      </Grid>
    </>
  );
}

ExtrasInfo.defaultProps = {
  orderedGoodsList: [],
  onDeleteGood: () => {},
};

ExtrasInfo.propTypes = {
  orderedGoodsList: PropTypes.array,
  onDeleteGood: PropTypes.func,
};

export default ExtrasInfo;
