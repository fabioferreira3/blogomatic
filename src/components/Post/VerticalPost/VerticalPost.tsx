import React, { useContext, useEffect } from "react"
import { Box, Grid, Typography } from "@material-ui/core"
import Img from "gatsby-image"
import { Link, navigate } from "gatsby"
import parse from "html-react-parser"

import { PostActionButton } from "../../Common/PostActionButton"
import { verticalPostStyles } from "./VerticalPost.styles"
import { PostTimestamp } from "../../Common/PostTimestamp"
import { PostAuthor } from "../../Common/PostAuthor"
import { RootContext } from "../../App"

export const VerticalPost: React.FC<any> = props => {
  const { author, featuredImage, createdAt, title, summary, slug } = props
  const { textContent } = useContext(RootContext)
  const classes = verticalPostStyles()

  useEffect(() => {
  //  console.log(`VERTICAL LARGE POST:: ${title} rendered`)
  })

  return (
    <Grid container item direction={"column"} className={classes.wrapper}>
      {featuredImage && (
        <Box
          className={classes.mainImageWrapper}
          onClick={() => navigate(slug)}
        >
          <Img className={classes.mainImage} fluid={featuredImage.imageSource} alt={featuredImage.alt} title={featuredImage.title} />
        </Box>
      )}
      <Grid container alignItems={"center"} style={{ marginTop: 10 }}>
        <PostTimestamp date={createdAt.formated} displayIcon={true} />
      </Grid>

      <Link to={`/${slug}`} className={classes.link}>
        <Typography
          className={classes.title}
          variant={"h2"}
          color={"textPrimary"}
        >
          {parse(title)}
        </Typography>
      </Link>

      <Typography variant={"body1"} component={"div"} color={"textPrimary"}>
        {parse(summary)}
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
        {textContent.READ_MORE}
      </PostActionButton>
    </Grid>
  )
}
