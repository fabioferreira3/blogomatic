import { makeStyles } from "@material-ui/core/styles"

const miniPostStyles = () => {
  return makeStyles(theme => ({
    mainImageWrapper: {
      cursor: "pointer",
      width: "100%",
      height: "100%",
      borderRadius: 10,
      overflow: "hidden",
    },
    link: { textDecoration: "none", boxShadow: "none" },
    mainImage: { width: "100%", height: "100%", borderRadius: 10 },
    title: {
      fontSize: "20px !important",
    },
  }))()
}

export default miniPostStyles
