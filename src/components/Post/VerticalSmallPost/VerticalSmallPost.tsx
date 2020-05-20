import React, { useEffect } from "react"
import { Box, Grid, Typography } from "@material-ui/core"
import Img from "gatsby-image"

import { verticalSmallPostStyles } from "./VerticalSmallPost.styles"
import { PostTimestamp } from "../../Common/PostTimestamp"
import { Link, navigate } from "gatsby"

export const VerticalSmallPost: React.FC<any> = props => {
  const classes = verticalSmallPostStyles()

  const { featuredImageSource, updatedAt, slug, title } = props

  useEffect(() => {
    console.log(`VERTICAL SMALL POST:: ${title} rendered`)
  })

  return (
    <Grid container direction={"column"} style={{ marginBottom: 25 }}>
      {featuredImageSource && (
        <Box
          className={classes.mainImageWrapper}
          onClick={() => navigate(slug)}
        >
          <Img fluid={featuredImageSource} className={classes.mainImage} />
        </Box>
      )}
      <Grid
        container
        alignItems={"center"}
        className={classes.timestampWrapper}
      >
        <PostTimestamp date={updatedAt.formated} displayIcon={true} />
      </Grid>
      <Link to={slug} style={{ textDecoration: "none", boxShadow: "none" }}>
        <Typography
          variant={"h3"}
          color={"textPrimary"}
          className={classes.title}
        >
          {title}
        </Typography>
      </Link>
    </Grid>
  )
}
