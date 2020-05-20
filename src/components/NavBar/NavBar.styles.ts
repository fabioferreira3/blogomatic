import { makeStyles } from "@material-ui/core/styles"

export const navBarStyles = () => {
  return makeStyles(theme => ({
    grow: {
      flexGrow: 1,
    },
    appBar: {
      boxShadow: "none",
      paddingRight: "15px !important",
      borderBottom: "1px solid #eaeaea",
    },
    navMenu: {
      height: "100%",
      width: "100%",
      color: "white",
      padding: 10,
      backgroundColor: "transparent",
    },
  }))()
}
