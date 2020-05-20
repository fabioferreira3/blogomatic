import React, { useEffect } from "react"
import { Box, Grid, Typography } from "@material-ui/core"
import Img from "gatsby-image"
import { Link, navigate } from "gatsby"

import { PostActionButton } from "../../Common/PostActionButton"
import { verticalLargePostStyles } from "./VerticalLargePost.styles"
import { PostTimestamp } from "../../Common/PostTimestamp"
import { PostAuthor } from "../../Common/PostAuthor"

export const VerticalLargePost: React.FC<any> = props => {
  const { author, featuredImageSource, updatedAt, title, summary, slug } = props
  console.log(props)
  const classes = verticalLargePostStyles()

  useEffect(() => {
    console.log(`VERTICAL LARGE POST:: ${title} rendered`)
  })

  return (
    <Grid container direction={"column"} className={classes.wrapper}>
      {featuredImageSource && (
        <Box
          className={classes.mainImageWrapper}
          onClick={() => navigate(slug)}
        >
          <Img className={classes.mainImage} fluid={featuredImageSource} />
        </Box>
      )}
      <Grid container alignItems={"center"} style={{ marginTop: 10 }}>
        <PostTimestamp date={updatedAt.formated} displayIcon={true} />
      </Grid>

      <Link to={slug} className={classes.link}>
        <Typography
          className={classes.title}
          variant={"h2"}
          color={"textPrimary"}
        >
          {title}
        </Typography>
      </Link>

      <Typography variant={"body1"} component={"div"} color={"textPrimary"}>
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
      <PostActionButton
        style={{ marginTop: 20 }}
        onClick={() => navigate(slug)}
      >
        Read More
      </PostActionButton>
    </Grid>
  )
}
