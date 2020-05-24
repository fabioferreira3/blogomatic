import React, { useEffect } from "react"
import { Box, Grid, Typography } from "@material-ui/core"
import Img from "gatsby-image"
import { Link, navigate } from "gatsby"
import parse from 'html-react-parser'

import { squarePostStyles } from "./SquarePost.styles"
import { BlackOverlay } from "../../Common/BlackOverlay"

export const SquarePost: React.FC<any> = props => {
  const { featuredImageSource, hasOverlay, slug, title } = props
  const classes = squarePostStyles()

  useEffect(() => {
    console.log(`SQUARE POST:: ${title} rendered`)
  })

  return (
    <Grid item className={classes.wrapper}>
      {featuredImageSource && (
        <Box
          className={classes.mainImageWrapper}
          onClick={() => navigate(slug)}
        >
          {hasOverlay && <BlackOverlay />}
          <Img fluid={featuredImageSource} className={classes.mainImage} />
        </Box>
      )}
      <Link to={`/${slug}`} className={classes.link}>
        <Typography variant={"h3"} className={classes.title}>
          {parse(title)}
        </Typography>
      </Link>
    </Grid>
  )
}
