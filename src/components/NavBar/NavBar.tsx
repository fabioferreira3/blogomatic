import React from "react";
import { AppBar } from "@material-ui/core";

import { NavMenu } from "../NavMenu/NavMenu"
import { navBarStyles } from "./NavBar.styles";

export const NavBar: React.FC = () => {
  const classes = navBarStyles();
  return (
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
      <NavMenu />
    </AppBar>
  );
};
