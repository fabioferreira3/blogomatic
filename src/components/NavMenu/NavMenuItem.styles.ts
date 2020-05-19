import { makeStyles } from "@material-ui/core/styles"

export const navMenuItemStyles = () => {
  return makeStyles(theme => ({
    submenu: {
      position: "absolute",
      top: "70px",
      backgroundColor: "black",
      borderRadius: "0px 0px 20px 20px",
      overflow: "auto",
    },
    menuItem: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      minWidth: "140px",
    },
  }))()
}
