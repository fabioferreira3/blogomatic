import React, { useEffect } from "react"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Img from "gatsby-image"
import { Link, navigate } from "gatsby"
import parse from 'html-react-parser'

import squarePostStyles from "./SquarePost.styles"
import BlackOverlay from "../../Common/BlackOverlay"

const SquarePost: React.FC<any> = props => {
  const { featuredImage, hasOverlay, slug, title } = props
  const classes = squarePostStyles()

  return (
    <Grid item className={classes.wrapper}>
      {featuredImage && (
        <Box
          className={classes.mainImageWrapper}
          onClick={() => navigate(slug)}
        >
          {hasOverlay && <BlackOverlay />}
          <Img fluid={featuredImage.imageSource} alt={featuredImage.alt} title={featuredImage.title} className={classes.mainImage} />
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

export default SquarePost
