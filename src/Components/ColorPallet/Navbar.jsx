import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import CPStyles from "./ColorPalletStyle";

const Navbar = ({ Color, handleOnChange }) => {
  const classes = CPStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.toolBar} >
          <Typography variant="h6" style={{ color: Color }}>
            Color Palette
          </Typography>
          <input
            type="color"
            value={Color}
            name="color"
            onChange={handleOnChange}
            className={classes.input}
            style={{ background: Color }}
          />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
