import React, { useEffect } from "react"
import { Avatar, Grid, Typography } from "@material-ui/core"
import VisibilityIcon from "@material-ui/icons/Visibility"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import Img from "gatsby-image"

import { PostActionButton } from "../../Common/PostActionButton"
import { verticalLargePostStyles } from "./VerticalLargePost.styles"
import { PostTimestamp } from "../../Common/PostTimestamp"
import { PostAuthor } from "../../Common/PostAuthor"

export const VerticalLargePost: React.FC<any> = props => {
  const { author, featuredImageSource, lastUpdate, title, summary } = props
  const classes = verticalLargePostStyles()

  useEffect(() => {
    console.log(`VERTICAL LARGE POST:: ${title} rendered`)
  })

  return (
    <Grid container direction={"column"} className={classes.wrapper}>
      {featuredImageSource && (
        <Img className={classes.mainImage} fluid={featuredImageSource} />
      )}
      <Grid container alignItems={"center"} style={{ marginTop: 10 }}>
        <PostTimestamp date={lastUpdate.formated} displayIcon={true} />
      </Grid>
      <Typography
        className={classes.title}
        variant={"h2"}
        color={"textPrimary"}
      >
        {title}
      </Typography>

      <Typography variant={"body1"}>
        <div dangerouslySetInnerHTML={{ __html: summary }} />
      </Typography>
      <Grid
        container
        alignItems={"center"}
        className={classes.postAuthorWrapper}
      >
        <PostAuthor
          authorName={author.name}
          imageSource={author.imageSource}
          likeCount={"300"}
          viewCount={"135"}
        />
      </Grid>
      <PostActionButton style={{ marginTop: 20 }}>Read More</PostActionButton>
    </Grid>
  )
}
