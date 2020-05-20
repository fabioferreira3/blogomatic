import { makeStyles } from "@material-ui/core/styles"

export const blogPostStyles = () => {
  return makeStyles(theme => ({
    contentWrapper: { padding: 25 },
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
  }))()
}
