import React from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

SkeletonProduct.propTypes = {
  length: PropTypes.number,
};

SkeletonProduct.defaultProps = {
  length: 8,
};

function SkeletonProduct({ length }) {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {Array.from(new Array(length)).map((x, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Skeleton variant="rect" width="100%" height={300} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default SkeletonProduct;
