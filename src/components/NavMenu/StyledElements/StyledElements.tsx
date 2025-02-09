import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import MenuItem from "@material-ui/core/MenuItem"

export const StyledMenuItem = withStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
  },
}))(MenuItem)

export const StyledListItemIcon = withStyles(theme => ({
  root: {
    minWidth: 40,
    color: theme.palette.text.primary,
  },
}))(ListItemIcon)

export const StyledButton = withStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
    fontSize: 16,
    width: "100%",
    background: "none",
    border: 0,
    boxShadow: "none",
    transition: "background 0.4s, color 0.4s",
    "&:hover, &:focus": {
      background: theme.palette.primary.main,
      color: theme.palette.text.secondary,
      boxShadow: "none",
    },
  },
}))(Button)
