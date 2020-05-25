import React, { useEffect } from "react"
import { Box, Grid, Typography } from "@material-ui/core"
import Img from "gatsby-image"
import { Link, navigate } from "gatsby"
import parse from 'html-react-parser'

import { miniPostStyles } from "./MiniPost.styles"
import { PostTimestamp } from "../../Common/PostTimestamp"

export const MiniPost: React.FC<any> = props => {
  const classes = miniPostStyles()
  const { featuredImage, updatedAt, slug, title } = props

  useEffect(() => {
    console.log(`MINI POST:: ${title} rendered`)
  })

  return (
    <Grid container wrap={"nowrap"} justify={"center"}>
      <Grid item style={{ width: "60%", height: 80 }}>
        {featuredImage && (
          <Box
            className={classes.mainImageWrapper}
            onClick={() => navigate(slug)}
          >
            <Img fluid={featuredImage.imageSource} alt={featuredImage.alt} title={featuredImage.title} className={classes.mainImage} />
          </Box>
        )}
      </Grid>
      <Grid
        container
        item
        direction={"column"}
        alignItems={"flex-start"}
        style={{ paddingLeft: 13 }}
      >
        <PostTimestamp date={updatedAt.formated} />
        <Link to={`/${slug}`} className={classes.link}>
          <Typography variant={"h4"} color={"textPrimary"}>
            {parse(title)}
          </Typography>
        </Link>
      </Grid>
    </Grid>
  )
}
