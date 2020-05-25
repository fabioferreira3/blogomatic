import React, { useContext } from "react"
import VisibilityIcon from "@material-ui/icons/Visibility"
import { Avatar, Grid, Typography } from "@material-ui/core"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import { makeStyles } from "@material-ui/core/styles"
import { RootContext } from "../App"

export const PostAuthor: React.FC<any> = props => {
  const { authorName, imageSource } = props
  const { textContent } = useContext(RootContext)
  const likeCount = Math.floor(Math.random() * 600) + 300
  const viewCount = Math.floor(Math.random() * 4000) + 2000
  const avatarClasses = makeStyles(theme => ({
    img: {
      marginBottom: 0,
    },
  }))()
  const classes = makeStyles(theme => ({
    authorName: { marginLeft: 10, fontSize: 14 },
    avatar: { width: 30, height: 30 },
    countView: { marginLeft: 5, fontSize: 12, color: theme.palette.info.main },
    likeCount: { marginLeft: 5, fontSize: 12, color: theme.palette.info.main },
    favoriteIcon: {
      marginLeft: 15,
      fontSize: 12,
      color: theme.palette.info.main,
    },
    visibilityIcon: { fontSize: 12, color: theme.palette.info.main },
  }))()

  return (
    <Grid container alignItems={"center"} wrap={"nowrap"}>
      <Grid container item alignItems={"center"}>
        <Avatar
          alt={authorName}
          src={imageSource}
          classes={avatarClasses}
          className={classes.avatar}
        />
        <Typography className={classes.authorName}>{textContent.BY} {authorName}</Typography>
      </Grid>
      <Grid container item alignItems={"center"} justify={"flex-end"}>
        <VisibilityIcon className={classes.visibilityIcon} />
        <Typography variant={"body2"} className={classes.countView}>
          {viewCount}
        </Typography>
        <FavoriteBorderIcon className={classes.favoriteIcon} />
        <Typography variant={"body2"} className={classes.likeCount}>
          {likeCount}
        </Typography>
      </Grid>
    </Grid>
  )
}
