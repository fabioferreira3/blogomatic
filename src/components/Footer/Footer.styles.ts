import { makeStyles } from "@material-ui/core/styles"

const footerStyles = () => {
  return makeStyles(theme => ({
    wrapper: {
      padding: 20,
      marginTop: 60,
      paddingTop: 80,
      background: theme.palette.secondary.main,
    },
    columnWrapper: { padding: 10 },
    itemHeader: { fontSize: 20, marginBottom: 20 },
    postWrapper: {
      background: "#fff",
      padding: 10,
      marginBottom: 10,
      borderRadius: 10,
    },
    siteDescription: {
      marginTop: 40,
      fontFamily: theme.typography.fontFamily,
      fontSize: 22,
    },
    logoWrapper: {
      cursor: "pointer",
      width: "100%",
      background: "#fff",
      padding: 10,
      borderRadius: 10,
    },
    categoryItem: {
      margin: 0,
      padding: "0 0 5px 0",
      color: theme.palette.text.secondary,
    },
  }))()
}

export default footerStyles
