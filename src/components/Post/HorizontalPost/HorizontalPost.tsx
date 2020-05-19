import React, { useEffect } from "react"
import { Avatar, Grid, Typography } from "@material-ui/core"
import VisibilityIcon from "@material-ui/icons/Visibility"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import Img from "gatsby-image"

import { horizontalPostStyles } from "./HorizontalPost.styles"
import { PostActionButton } from "../../Common/PostActionButton"
import { PostTimestamp } from "../../Common/PostTimestamp"
import { PostAuthor } from "../../Common/PostAuthor"

export const HorizontalPost: React.FC<any> = props => {
  const { author, featuredImageSource, lastUpdate, title, summary } = props
  const classes = horizontalPostStyles()

  useEffect(() => {
    console.log(`HORIZONTAL POST:: ${title} rendered`)
  })

  return (
    <Grid container style={{ marginBottom: 25 }}>
      <Grid item xs={12} sm={6}>
        {featuredImageSource && (
          <Img
            fluid={featuredImageSource}
            style={{ width: "100%", maxHeight: 400, borderRadius: 10 }}
          />
        )}
      </Grid>
      <Grid container xs={12} sm={6} item style={{ paddingLeft: 20 }}>
        <Grid container alignItems={"center"}>
          <PostTimestamp date={lastUpdate.formated} displayIcon={true} />
        </Grid>
        <Typography variant={"h2"} style={{ marginTop: 10, marginBottom: 10 }}>
          {title}
        </Typography>

        <div dangerouslySetInnerHTML={{ __html: summary }} />
        <Grid container alignItems={"center"} style={{ flexWrap: "nowrap" }}>
          <PostAuthor
            authorName={author.name}
            imageSource={author.imageSource}
            likeCount={"300"}
            viewCount={"135"}
          />
        </Grid>
        <PostActionButton style={{ marginTop: 20 }}>Read More</PostActionButton>
      </Grid>
    </Grid>
  )
}
