import { makeStyles } from "@material-ui/core/styles"

export const squarePostStyles = () => {
  return makeStyles(theme => ({
    wrapper: {
      position: "relative",
      height: "100%",
      width: "100%",
      marginBottom: 20,
      borderRadius: 8,
      overflow: "hidden",
    },
    mainImage: {
      width: "100%",
      height: "100%",
    },
    title: {
      position: "absolute",
      left: 20,
      bottom: 20,
      zIndex: 1,
      marginRight: 20,
      color: "white",
    },
  }))()
}
