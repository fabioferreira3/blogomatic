import { makeStyles } from "@material-ui/core/styles"

export const horizontalPostStyles = () => {
  return makeStyles(theme => ({
    wrapper: { marginBottom: 25 },
    contentWrapper: { paddingLeft: 20 },
    img: {
      marginBottom: 0,
    },
    mainImageWrapper: {
      cursor: "pointer",
      width: "100%",
      maxHeight: 400,
      borderRadius: 10,
      overflow: "hidden",
    },
    mainImage: { width: "100%", maxHeight: 400 },
    title: { marginTop: 10, marginBottom: 10 },
    link: { textDecoration: "none", boxShadow: "none" },
  }))()
}
