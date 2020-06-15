import React, { useEffect } from "react"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Img from "gatsby-image"
import { Link, navigate } from "gatsby"
import parse from "html-react-parser"

import smallPostStyles from "./SmallPost.styles"
import PostTimestamp from "../../Common/PostTimestamp"

const SmallPost: React.FC<any> = props => {
  const classes = smallPostStyles()

  const { featuredImage, createdAt, slug, title } = props

  return (
    <Grid container direction={"column"} style={{ marginBottom: 25 }}>
      {featuredImage && (
        <Box
          className={classes.mainImageWrapper}
          onClick={() => navigate(slug)}
        >
          <Img fluid={featuredImage.imageSource} alt={featuredImage.alt} title={featuredImage.title} className={classes.mainImage} />
        </Box>
      )}
      <Grid
        container
        alignItems={"center"}
        className={classes.timestampWrapper}
      >
        <PostTimestamp date={createdAt.formated} displayIcon={true} />
      </Grid>
      <Link
        to={`/${slug}`}
        style={{ textDecoration: "none", boxShadow: "none" }}
      >
        <Typography
          variant={"h3"}
          color={"textPrimary"}
          className={classes.title}
        >
          {parse(title)}
        </Typography>
      </Link>
    </Grid>
  )
}

export default SmallPost
