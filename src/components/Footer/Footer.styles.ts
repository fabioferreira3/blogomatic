import { makeStyles } from "@material-ui/core/styles"

export const footerStyles = () => {
  return makeStyles(theme => ({
    wrapper: { padding: 20, marginTop: 60, paddingTop: 80 },
    columnWrapper: { padding: 10 },
    itemHeader: { marginBottom: 20 }
  }))()
}
