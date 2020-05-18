import React, { createContext, useState } from "react";
import { Grid, Hidden } from "@material-ui/core";

import { NavMenuItem } from "./NavMenuItem";
import { navBarStyles } from "../NavBar/NavBar.styles";
//import navMenuItemsData from "../../dummy/NavMenuItems.dummy";

export const NavMenuContext = createContext({});

export const NavMenu: React.FC<any> = () => {
  const classes = navBarStyles();
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <NavMenuContext.Provider value={{ activeMenu, setActiveMenu }}>
      <Hidden xsDown>
        <Grid justify={"flex-end"} container className={classes.navMenu}>
          <NavMenuItem title={"Eita preula"} slug={"carai"}/>
        </Grid>
      </Hidden>
    </NavMenuContext.Provider>
  );
};
