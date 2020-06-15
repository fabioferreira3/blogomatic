import { makeStyles } from "@material-ui/core/styles"

const categoryPageStyles = () => {
  return makeStyles(theme => ({
    headerWrapper: { padding: 20 },
    categoryWrapper: {
      marginTop: 10,
      [theme.breakpoints.down("xs")]: {
        marginTop: 0,
      },
    },
  }))()
}

export default categoryPageStyles
