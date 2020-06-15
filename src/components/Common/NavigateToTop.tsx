import React, { useState } from "react"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import NavigationIcon from "@material-ui/icons/Navigation"

import { useScrollPosition } from "@n8tb1t/use-scroll-position"

export const StyledButton = withStyles(theme => ({
  root: {
    zIndex: 100,
    position: "fixed",
    bottom: 50,
    right: 50,
    height: 60,
    color: theme.palette.text.secondary,
    fontSize: 16,
    background: theme.palette.primary.main,
    border: 0,
    boxShadow: "none",
    [theme.breakpoints.down("xs")]: {
      height: 45,
      right: 20,
      bottom: 20,
    },
    "&:hover": {
      background: theme.palette.secondary.main,
    },
  },
}))(Button)

const NavigateToTop: () => false | any = () => {
  const [hideOnScroll, setHideOnScroll] = useState(true)
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > 0
      if (isShow !== hideOnScroll) setHideOnScroll(isShow)
    },
    [hideOnScroll]
  )

  const goUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }
  return (
    !hideOnScroll && (
      <StyledButton onClick={() => goUp()}>
        <NavigationIcon />
      </StyledButton>
    )
  )
}

export default NavigateToTop
