import React, { useEffect } from "react"
import { Grid, Typography } from "@material-ui/core"
import Img from "gatsby-image"

import { verticalSmallPostStyles } from "./VerticalSmallPost.styles"
import { PostTimestamp } from "../../Common/PostTimestamp"

export const VerticalSmallPost: React.FC<any> = props => {
  const classes = verticalSmallPostStyles()

  const { featuredImageSource, lastUpdate, title } = props

  useEffect(() => {
    console.log(`VERTICAL SMALL POST:: ${title} rendered`)
  })

  return (
    <Grid container direction={"column"} style={{ marginBottom: 25 }}>
      {featuredImageSource && (
        <Img fluid={featuredImageSource} className={classes.mainImage} />
      )}
      <Grid
        container
        alignItems={"center"}
        className={classes.timestampWrapper}
      >
        <PostTimestamp date={lastUpdate.formated} displayIcon={true} />
      </Grid>
      <Typography
        variant={"h3"}
        color={"textPrimary"}
        className={classes.title}
      >
        {title}
      </Typography>
    </Grid>
  )
}
