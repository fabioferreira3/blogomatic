import { makeStyles } from "@material-ui/core/styles"

export const categoryPageStyles = () => {
  return makeStyles(theme => ({
    headerWrapper: { padding: 20 },
    categoryWrapper: {
      marginTop: 30,
      [theme.breakpoints.down("xs")]: {
        marginTop: 0,
      },
    },
  }))()
}
