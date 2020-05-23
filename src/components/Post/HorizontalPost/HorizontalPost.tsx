import React, { useContext, useEffect } from "react"
import { Box, Grid, Typography } from "@material-ui/core"
import { Link, navigate } from "gatsby"
import Img from "gatsby-image"
import parse from "html-react-parser"

import { horizontalPostStyles } from "./HorizontalPost.styles"
import { PostActionButton } from "../../Common/PostActionButton"
import { PostTimestamp } from "../../Common/PostTimestamp"
import { PostAuthor } from "../../Common/PostAuthor"
import { RootContext } from "../../App"

export const HorizontalPost: React.FC<any> = props => {
  const { author, featuredImageSource, updatedAt, slug, summary, title } = props
  const { textContent } = useContext(RootContext)
  const classes = horizontalPostStyles()

  useEffect(() => {
    console.log(`HORIZONTAL POST:: ${title} rendered`)
  })

  return (
    <Grid container item className={classes.wrapper}>
      <Grid item xs={12} sm={6}>
        {featuredImageSource && (
          <Box
            className={classes.mainImageWrapper}
            onClick={() => navigate(slug)}
          >
            <Img fluid={featuredImageSource} className={classes.mainImage} />
          </Box>
        )}
      </Grid>
      <Grid container xs={12} sm={6} item className={classes.contentWrapper}>
        <Grid container alignItems={"center"}>
          <PostTimestamp date={updatedAt.formated} displayIcon={true} />
        </Grid>
        <Grid container direction={"column"}>
          <Link to={`/${slug}`} className={classes.link}>
            <Typography
              variant={"h2"}
              color={"textPrimary"}
              className={classes.title}
            >
              {title}
            </Typography>
          </Link>
          <Typography variant={"body1"} component={"div"} color={"textPrimary"}>
            <Box>{parse(summary)}</Box>
          </Typography>
        </Grid>

        <PostAuthor
          authorName={author.name}
          imageSource={author.imageSource}
          likeCount={"300"}
          viewCount={"135"}
        />
        <PostActionButton
          style={{ marginTop: 20 }}
          onClick={() => navigate(slug)}
        >
          {textContent.READ_MORE}
        </PostActionButton>
      </Grid>
    </Grid>
  )
}
