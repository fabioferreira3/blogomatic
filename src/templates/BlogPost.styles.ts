import { makeStyles } from "@material-ui/core/styles"

const blogPostStyles = () => {
  return makeStyles(theme => ({
    postWrapper: { padding: 25 },
    mainImageWrapper: { height: "50vh", borderRadius: 10, overflow: "hidden" },
    mainImage: { height: "100%" },
    title: {
      marginTop: 10,
      paddingTop: 5,
      paddingBottom: 5,
    },
    authorWrapper: {
      marginTop: 15,
      marginBottom: 15,
    },
    socialWrapper: {
      position: "sticky",
      left: 0,
      top: 300,
      marginTop: "3.5em",
      [theme.breakpoints.down("sm")]: {
        marginTop: 0,
      },
    },
    contentWrapper: {
      marginTop: 30,
    },
  }))()
}

export default blogPostStyles
