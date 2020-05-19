import React, { createContext, useMemo, useState } from "react"
import { Grid, Hidden } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"

import { NavMenuItem } from "./NavMenuItem"
import { navBarStyles } from "../NavBar/NavBar.styles"
import { normalizeMainMenu } from "../../normalizers/mainMenu"

export const NavMenuContext = createContext({})

export const NavMenu: React.FC<any> = () => {
  const classes = navBarStyles()
  const [activeMenu, setActiveMenu] = useState(null)
  const rawMainMenuData = useStaticQuery(graphql`
    query {
      wordpressMenusMenusItems(slug: { eq: "main-menu" }) {
        slug
        items {
          ...wpMenuItems
          child_items {
            ...wpMenuChildItems
          }
        }
      }
    }
  `)

  const menuItemsComponents = useMemo(() => {
    const mainMenuData: any = normalizeMainMenu(rawMainMenuData, "wp")
    return (
      mainMenuData.items &&
      mainMenuData.items.map((item: any) => {
        return <NavMenuItem key={item.id} {...item} />
      })
    )
  }, [rawMainMenuData])

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
