import { withStyles } from "@material-ui/core/styles"
import { Button } from "@material-ui/core"

export const PostActionButton = withStyles(theme => ({
  root: {
    fontSize: 14,
    background: theme.palette.secondary.main,
    border: 0,
    borderRadius: 5,
    boxShadow: "none",
    color: theme.palette.text.secondary,
    height: 40,
    width: 120,
    padding: 5,
    "&:hover": {
      background: theme.palette.secondary.dark,
      boxShadow: "none",
    },
  },
}))(Button)
