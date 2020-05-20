import React, { createContext, useMemo, useState } from "react"
import { Grid, Hidden } from "@material-ui/core"

import { NavMenuItem } from "./NavMenuItem"
import { navBarStyles } from "../NavBar/NavBar.styles"
import { useMainMenu } from "../../hooks/useMainMenu"

export const NavMenuContext = createContext({})

export const NavMenu: React.FC<any> = () => {
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
    </NavMenuContext.Provider>
  )
}
