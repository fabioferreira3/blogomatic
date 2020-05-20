import { makeStyles } from "@material-ui/core/styles"

export const verticalLargePostStyles = () => {
  return makeStyles(theme => ({
    wrapper: {
      marginBottom: 50,
    },
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
    title: {
      marginTop: 10,
      marginBottom: 10,
    },
    link: { textDecoration: "none", boxShadow: "none" },
    postAuthorWrapper: {
      flexWrap: "nowrap",
      marginTop: 15,
      color: theme.palette.info.main,
    },
    avatar: { width: 30, height: 30 },
    authorName: { marginLeft: 10, fontSize: 14 },
    countView: { marginLeft: 5, fontSize: 12 },
    likeCount: { marginLeft: 5, fontSize: 12 },
    favoriteIcon: { marginLeft: 15, fontSize: 12 },
    visibilityIcon: { fontSize: 12 },
  }))()
}
