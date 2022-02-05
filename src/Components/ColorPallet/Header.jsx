import React, { useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import Navbar from "./Navbar";
import CPStyles from "./ColorPalletStyle";
import SvgComponent from "./SvgComponent";

const Header = () => {
  const classes = CPStyles();

  const [Color, setColor] = useState("#d50000");

  const handleOnChange = ({ target }) => {
    // console.log(Color);
    setColor(target.value);
  };
  return (
    <>
      <Box className={classes.wrapper}>
        <Navbar Color={Color} handleOnChange={handleOnChange} />
        <Box className={classes.gridWrapper}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Box p={2}>
                <Typography
                  variant="h3"
                  component="h5"
                  style={{ color: Color, marginBottom: "25px" }}
                >
                  React Color Pallet
                </Typography>
                <Typography
                  variant="h6"
                  style={{ color: Color, marginBottom: "25px" }}
                >
                  Learn React by bulding a color plate project for absolute
                  begainnerss
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sm={6}>
              <Box p={1}>
                <SvgComponent color={Color} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Header;
