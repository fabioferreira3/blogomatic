import { makeStyles } from "@material-ui/core/styles"

export const verticalSmallPostStyles = () => {
  return makeStyles(theme => ({
    title: { marginTop: 10, marginBottom: 10 },
    mainImageWrapper: {
      cursor: "pointer",
      width: "100%",
      maxHeight: 160,
      borderRadius: 10,
      overflow: "hidden",
    },
    mainImage: { width: "100%", maxHeight: 160, borderRadius: 10 },
    timestampWrapper: { marginTop: 10 },
  }))()
}
