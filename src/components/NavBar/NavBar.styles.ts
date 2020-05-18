import { makeStyles } from "@material-ui/core/styles";

export const navBarStyles = () => {
  return makeStyles(theme => ({
    grow: {
      flexGrow: 1,
    },
    appBar: {
      boxShadow: "none",
      paddingRight: "15px !important",
      height: "70px",
      background: "red",
    },
    navMenu: {
      position: "absolute",
      width: "100%",
      height: "100%",
      zIndex: 10,
      color: "white",
      backgroundColor: "transparent",
      paddingRight: "20px",
    },
  }))();
};
