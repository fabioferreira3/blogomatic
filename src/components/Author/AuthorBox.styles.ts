import { makeStyles } from "@material-ui/core/styles"

export const authorBoxStyles = () => {
  return makeStyles(theme => ({
    authorDescriptionWrapper: {
      borderRadius: 20,
      background: "#ededed",
      padding: 20
    },
    authorImageWrapper: {
      background: "#fff",
      borderRadius: 50,
      padding: 10,
      marginRight: 20
    },
    authorImage: {
      width: 50,
      height: 50
    }
  }))()}

