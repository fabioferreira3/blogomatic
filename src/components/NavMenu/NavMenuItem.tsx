import React, { useContext, useMemo } from "react"
import { ListItemText } from "@material-ui/core"
import Fade from "@material-ui/core/Fade"

import { NavMenuContext } from "./NavMenu"
import {
  StyledButton,
  StyledListItemIcon,
  StyledMenuItem,
} from "./StyledElements/StyledElements"
import { navMenuItemStyles } from "./NavMenuItem.styles"
import { INavMenuItemProps, NavMenuItemSubItemType } from "./NavMenuItem.types"

const NavMenuSubItem: React.FC<NavMenuItemSubItemType> = props => {
  const { title, icon, onClickEvent } = props
  return (
    <StyledMenuItem onClick={() => onClickEvent()}>
      {icon && <StyledListItemIcon>{icon}</StyledListItemIcon>}
      <ListItemText primary={title} />
    </StyledMenuItem>
  )
}

export const NavMenuItem: React.FC<INavMenuItemProps> = props => {
  const { activeMenu, setActiveMenu } = useContext<any>(NavMenuContext)
  const classes = navMenuItemStyles()

  const submenuIsOpen: boolean = activeMenu === props.id

  return useMemo(
    () => (
      <div
        className={classes.menuItem}
        onMouseOver={() => setActiveMenu(props.id)}
      >
        <StyledButton
          variant="contained"
          color="primary"
          onClick={() => {
            if (props.targetUrl) {
              console.log(`navigating to ${props.targetUrl}`)
            }
          }}
        >
          {props.title}
        </StyledButton>

        <Fade in={submenuIsOpen}>
          <div
            className={classes.submenu}
            onMouseLeave={() => setActiveMenu(null)}
          >
            {props.items &&
              props.items.length &&
              props.items.map((item, idx) => (
                <NavMenuSubItem key={idx} {...item} />
              ))}
          </div>
        </Fade>
      </div>
    ),
    [activeMenu]
  )
}
