import React, { createContext, useMemo, useState } from "react"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"

import { NavMenuItem } from "./NavMenuItem"
import navBarStyles from "../NavBar/NavBar.styles"
import useMainMenu from "../../hooks/useMainMenu"
import DrawerNavMenu from "./DrawerNavMenu"

export const NavMenuContext = createContext({})

const NavMenu: React.FC<any> = () => {
  const classes = navBarStyles()
  const [activeMenu, setActiveMenu] = useState(null)
  const mainMenuData = useMainMenu()

  const menuItemsComponents = useMemo(() => {
    return (
      mainMenuData.items &&
      mainMenuData.items.map((item: any) => (
        <NavMenuItem key={item.id} {...item} />
      ))
    )
  }, [mainMenuData])

  return (
    <NavMenuContext.Provider value={{ activeMenu, setActiveMenu }}>
      <Hidden xsDown>
        <Grid justify={"center"} container className={classes.navMenu}>
          {menuItemsComponents}
        </Grid>
      </Hidden>
      <Hidden smUp>
        <Grid justify={"center"} container className={classes.navMenu}>
          <DrawerNavMenu items={mainMenuData.items} />
        </Grid>
      </Hidden>
    </NavMenuContext.Provider>
  )
}

export default NavMenu
