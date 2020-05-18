import { withStyles } from "@material-ui/core/styles";
import { Button, ListItemIcon, MenuItem } from "@material-ui/core";

export const StyledMenuItem = withStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.text.secondary,
      "& .MuiListItemIcon-root": {
        color: theme.palette.text.secondary,
      },
    },
  },
}))(MenuItem);

export const StyledListItemIcon = withStyles(theme => ({
  root: {
    minWidth: "40px",
    color: theme.palette.text.primary,
  },
}))(ListItemIcon);

export const StyledButton = withStyles(theme => ({
  root: {
    width: "100%",
    background: "none",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.text.secondary,
    },
  },
}))(Button);
