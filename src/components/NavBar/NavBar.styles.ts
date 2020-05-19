import { makeStyles } from "@material-ui/core/styles"

export const navBarStyles = () => {
  return makeStyles(theme => ({
    grow: {
      flexGrow: 1,
    },
    appBar: {
      boxShadow: "none",
      paddingRight: "15px !important",
      height: 160,
      borderBottom: "1px solid #eaeaea",
    },
    navMenu: {
      position: "absolute",
      width: "100%",
      height: 70,
      zIndex: 10,
      color: "white",
      backgroundColor: "transparent",
      top: 90,
    },
  }))()
}
