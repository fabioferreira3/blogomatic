import React from "react"
import VisibilityIcon from "@material-ui/icons/Visibility"
import { Avatar, Grid, Typography } from "@material-ui/core"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import { makeStyles } from "@material-ui/core/styles"

export const PostAuthor: React.FC<any> = props => {
  const { authorName, imageSource, likeCount, viewCount } = props
  const classes = makeStyles(theme => ({
    img: {
      marginBottom: 0,
    },
    authorName: { marginLeft: 10, fontSize: 14 },
    avatar: { width: 30, height: 30 },
    countView: { marginLeft: 5, fontSize: 12 },
    likeCount: { marginLeft: 5, fontSize: 12 },
    favoriteIcon: { marginLeft: 15, fontSize: 12 },
    visibilityIcon: { fontSize: 12 },
  }))()

  return (
    <>
      <Grid container item alignItems={"center"}>
        <Avatar
          src={imageSource}
          classes={classes}
          className={classes.avatar}
        />
        <Typography className={classes.authorName}>by {authorName}</Typography>
      </Grid>
      <Grid container item alignItems={"center"} justify={"flex-end"}>
        <VisibilityIcon className={classes.visibilityIcon} />
        <Typography variant={"body2"} className={classes.countView}>
          {likeCount}
        </Typography>
        <FavoriteBorderIcon className={classes.favoriteIcon} />
        <Typography variant={"body2"} className={classes.likeCount}>
          {viewCount}
        </Typography>
      </Grid>
    </>
  )
}
